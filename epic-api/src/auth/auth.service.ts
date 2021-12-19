import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import CreateUserDto from 'src/user/user.create.dto';
import mysqlErrorCodes from 'src/database/mysqlErrorCodes';
import TokenPayload from './interfaces/tokenPayload.i';
import User from 'src/user/user.entity';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    
    constructor(
        private readonly userService: UserService, 
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ){}

    async register({password, email}: CreateUserDto) {
        // валидация пароля хэшэм bcrypt
        try{
            const hashedPassword = await bcrypt.hash(password, 12);

            const user = await this.userService.create({
                email,
                password: hashedPassword}
            );
            user.password = undefined;
            return user;
        } catch (e) {
            if(e?.code === mysqlErrorCodes.UniqueViolation) {
                throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
            }
            throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
         }
    }

    public async getAuthenticatedUser(email: string, plainTextPassword: string) {
        try {
            const user = await this.userService.findByEmail(email);
            await this.verifyPassword(plainTextPassword, user.password);
            user.password = undefined;
            return user;
        } catch(e) {

        }
    }
    // аутентификация после логина
    public getCookieWithJwtToken(user: User) {
        const payload: TokenPayload = { user };
        const token = this.jwtService.sign({ payload });
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get(
            'JWT_EXPIRATION_TIME'
            )}`;
    }

    async verifyPassword(pass1: string, pass2: string) {
        const arePasswordsMatching = await bcrypt.compare(pass1, pass2);

        if(!arePasswordsMatching) {
            throw new HttpException("Wrong credentials provided", HttpStatus.BAD_REQUEST);
        }
    }
}
