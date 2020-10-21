import { User } from './../user/model/user.schema';
import { IToken } from './interface/IToken';
import { CredentialsDto } from './dto/credentials.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(credentialDto: CredentialsDto): Promise<IToken>;
    signIn(credentialDto: CredentialsDto): Promise<IToken>;
    test(user: User): Promise<void>;
}
