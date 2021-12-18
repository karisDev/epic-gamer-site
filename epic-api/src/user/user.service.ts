import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import CreateUserDto from './user.create.dto';
import User from './user.entity';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepo: Repository<User>){}

    async findById(id: string) {
        const user = await this.userRepo.findOne({ id });
        if (user){
            return user;
        }

        throw new HttpException('User with this ID does not exist', HttpStatus.NOT_FOUND);
    }
    // создание новой записи пользователя
    async create(userData: CreateUserDto) {
        const newUser = await this.userRepo.create(userData);
        await this.userRepo.save(newUser);
        return newUser;
    }
}
