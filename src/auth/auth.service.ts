import { UserDocument } from './../user/model/user.schema';
import { Schema } from '@nestjs/mongoose';
import { IToken } from './interface/IToken';
import { JwtService } from '@nestjs/jwt';
import { HashSecurity } from './../shared/hash/hash.security';
import { UserDto } from './../user/dto/user.dto';
import { UserService } from './../user/user.service';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { CredentialsDto } from './dto/credentials.dto';





@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService:JwtService,
        private readonly userService: UserService,
        
    ) { }


    async signUp(credentialsDto: CredentialsDto) {
        const userDto:UserDto = {...credentialsDto} 
        await this.userService.createUser(userDto);
        return this.signIn(credentialsDto);

    }

    async signIn(credentialsDto : CredentialsDto):Promise<IToken> {
        const {password,username} = credentialsDto;

        const user = await this.userService.getUserByName(credentialsDto.username);
        const payload = {username};
        const accessToken = await this.jwtService.sign(payload);
        const isMatch = await HashSecurity.validatePassword(password,user.password);
        if(isMatch){
            return {username,accessToken};
        }
        throw new UnauthorizedException('Invalid credentials');
    }


}

