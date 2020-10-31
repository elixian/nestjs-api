import { User } from './../user/model/user.schema';
import { IToken } from './interface/IToken';
import { CredentialsDto } from './dto/credentials.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Get, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from './roles.guard'
import { Roles } from './roles.decorator';


@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    @ApiResponse({ status: 200, description: 'Return JWT payload' })
    @ApiResponse({ status: 400, description: 'Bad Request (account already exists, validation failed, ...)' })
    @ApiResponse({ status: 401, description: 'Ce compte existe déjà' })
    @ApiOperation({ summary: 'Create new user' })
    async signUp(@Body(ValidationPipe) credentialDto: CredentialsDto): Promise<IToken> {
        return await this.authService.signUp(credentialDto);
    }

    @Post('signin')
    @ApiResponse({ status: 401, description: 'Forbidden.' })
    @ApiOperation({ summary: 'Authentification' })
    async signIn(@Body() credentialDto: CredentialsDto): Promise<IToken> {
        return await this.authService.signIn(credentialDto);
    }



    @Post('/test')
    @UseGuards(RolesGuard)
    @ApiBearerAuth()
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async test(@GetUser() user: User) {
        console.log('test', user);
    }
    
    @Get('/test')
    @Roles('contributeur')
    @UseGuards(AuthGuard('jwt'),RolesGuard)
    async testRoleGuard() {
        console.log('test');
    }



}
