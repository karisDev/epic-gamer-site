import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import CreateUserDto from 'src/user/user.create.dto';
import mysqlErrorCodes from 'src/database/mysqlErrorCodes';

@Injectable()
export class AuthService {
    
    constructor(private readonly userService: UserService) {}

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
}
