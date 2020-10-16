import { AuthController } from './auth.controller';
import { UserService } from './../user/user.service';
import { UserModule } from './../user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { User, UserSchema } from '../user/model/user.schema'
import { AuthService } from './auth.service';

@Module({
    imports: [
        UserModule,
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
    controllers: [AuthController],
    providers: [AuthService,UserService],
})
export class AuthModule { }
