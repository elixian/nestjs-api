import { IToken } from './interface/IToken';
import { CredentialsDto } from './dto/credentials.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Get, Logger, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private authService :AuthService){}

    @Post('signup')
    async signUp(@Body(ValidationPipe) credentialDto : CredentialsDto):Promise<IToken>{
        Logger.debug('In signup');
        return await this.authService.signUp(credentialDto);
    }

    @Get('signin')
    async signIn(@Body(ValidationPipe) credentialDto : CredentialsDto):Promise<IToken>{
        return await this.authService.signIn(credentialDto);
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    async test(@Req() req ){
        console.log('test',req.user);
    }
}
