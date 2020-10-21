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
        private readonly jwtService: JwtService,
        private readonly userService: UserService,


    ) { }


    async signUp(credentialsDto: CredentialsDto) {
        const userDto: UserDto = { ...credentialsDto }
        try {
            await this.userService.createUser(userDto);
            return this.signIn(credentialsDto);
        } catch (error) {
            Logger.error(`Failed to signUp for user : ${JSON.stringify(credentialsDto.username)}`, error.stack, 'AuthService');
            throw new UnauthorizedException();
        }
    }

    async signIn(credentialsDto: CredentialsDto): Promise<IToken> {
        const { password, username } = credentialsDto;
        try {
            const user = await this.userService.getUserByName(credentialsDto.username);
            const isMatch = await HashSecurity.validatePassword(password, user.password);
            if (isMatch) {
                const payload = { username };
                const accessToken = await this.jwtService.sign(payload);
                return { username, accessToken };
            }
            throw new UnauthorizedException('Invalid credentials');
        } catch (error) {
            throw new UnauthorizedException('Invalid credentials');
        }

    }
}
