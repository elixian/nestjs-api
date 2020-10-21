import { JwtService } from '@nestjs/jwt';
import { UserService } from './../user/user.service';
import { CredentialsDto } from './dto/credentials.dto';
import { IToken } from './interface/IToken';
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: UserService);
    signUp(credentialsDto: CredentialsDto): Promise<IToken>;
    signIn(credentialsDto: CredentialsDto): Promise<IToken>;
}
