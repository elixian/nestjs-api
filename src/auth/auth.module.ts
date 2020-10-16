import { SecurityModule } from './../shared/security.module';
import { HashSecurity } from '../shared/hash/hash.security';
import { AuthController } from './auth.controller';
import { UserService } from './../user/user.service';
import { UserModule } from './../user/user.module';

import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';


@Module({
    imports: [
        UserModule,
        SecurityModule
        
    ],
    controllers: [AuthController],
    providers: [AuthService,UserService,HashSecurity],
    exports:[HashSecurity]
})
export class AuthModule { }
