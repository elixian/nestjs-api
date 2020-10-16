import { UserDocument } from './../user/model/user.schema';
import { CredentialsDto } from './dto/credentials.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Get, Logger, Post, ValidationPipe } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(private authService :AuthService){}

    @Post('signup')
    async signUp(@Body(ValidationPipe) credentialDto : CredentialsDto):Promise<UserDocument>{
        Logger.debug('In signup');
        return await this.authService.signUp(credentialDto);
    }

    @Get('signin')
    async signIn(@Body(ValidationPipe) credentialDto : CredentialsDto):Promise<string>{
        return await this.authService.signIn(credentialDto);
    }
}
