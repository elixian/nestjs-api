import { MailModule } from 'src/mail/mail.module';
import { JwtStrategy } from './jwt.strategy';
import { SecurityModule } from './../shared/security.module';
import { HashSecurity } from '../shared/hash/hash.security';
import { AuthController } from './auth.controller';
import { UserService } from './../user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport/dist/passport.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/model/user.schema';


@Module({
  imports: [
    SecurityModule,
    MailModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'MySecretKey',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, HashSecurity, JwtStrategy],
  exports: [JwtStrategy, PassportModule]
})
export class AuthModule { }
