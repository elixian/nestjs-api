import { UserDto } from './../user/dto/user.dto';
import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { CredentialsDto } from './dto/credentials.dto';
import { UserDocument } from 'src/user/model/user.schema';


@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService
    ) { }


    async signUp(credentialsDto: CredentialsDto) {
        const userDto:UserDto = {...credentialsDto} 
        return await this.userService.createUser(userDto);
    }

    async signIn(credentialsDto : CredentialsDto): Promise<UserDocument>{

        return await this.userService.getUserByName(credentialsDto.username);
    }
   
}

