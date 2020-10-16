import { HashSecurity } from './../shared/hash/hash.security';
import { UserDto } from './../user/dto/user.dto';
import { UserService } from './../user/user.service';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { CredentialsDto } from './dto/credentials.dto';
import { UserDocument } from 'src/user/model/user.schema';


@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,

    ) { }


    async signUp(credentialsDto: CredentialsDto) {
        const userDto:UserDto = {...credentialsDto} 
        Logger.debug('In signup Service');
        return await this.userService.createUser(userDto);
    }

    async signIn(credentialsDto : CredentialsDto): Promise<string>{
        const {password} = credentialsDto;

        const user = await this.userService.getUserByName(credentialsDto.username);

        const isMatch = await HashSecurity.validatePassword(password,user.password);
        if(isMatch){
            return user.username;
        }
        throw new UnauthorizedException('Invalid credentials');
    }
   
}

