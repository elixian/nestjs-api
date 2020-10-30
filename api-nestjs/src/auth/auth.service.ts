
import { JwtService } from '@nestjs/jwt';
import { HashSecurity } from './../shared/hash/hash.security';
import { UserDto } from './../user/dto/user.dto';
import { UserService } from './../user/user.service';
import { Injectable, Logger, UnauthorizedException, ConflictException } from '@nestjs/common';
import { CredentialsDto } from './dto/credentials.dto';
import { IToken } from './interface/IToken';





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
            throw new ConflictException(error.message);
        }
    }

    async signIn(credentialsDto: CredentialsDto): Promise<IToken> {
        const { password, username } = credentialsDto;
        Logger.log(`credential : ${JSON.stringify(credentialsDto)}`,'AuthService signIn');

        try {
            //retrieve User
            const user = await this.userService.getUserByName(credentialsDto.username);
            //Check password
            const isMatch = await HashSecurity.validatePassword(password, user.password);

            if (isMatch) {
                Logger.log(`isMatch : ${JSON.stringify(credentialsDto)}`, 'AuthService signIn');
                //on créé le Token
                const payload = { username , role: user.role };
                Logger.log(payload,'payload ')
                const accessToken = await this.jwtService.sign(payload);
                // on retourne les infos que l'on veut retourner :p
                return { username, accessToken, role:user.role };
            }
            throw new UnauthorizedException('Invalid credentials');
        } catch (error) {
            throw new UnauthorizedException('Invalid credentials');
        }

    }
}

