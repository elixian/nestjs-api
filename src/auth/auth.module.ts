import { SecurityModule } from './../shared/security.module';
import { HashSecurity } from '../shared/hash/hash.security';
import { AuthController } from './auth.controller';
import { UserService } from './../user/user.service';
import { UserModule } from './../user/user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport/dist/passport.module';


@Module({
    imports: [
        UserModule,
        SecurityModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'toto',
      signOptions: {
        expiresIn: 3600,
      },
    }),
          
        
    ],
    controllers: [AuthController],
    providers: [AuthService,UserService,HashSecurity],
    exports:[HashSecurity]
})
export class AuthModule { }
