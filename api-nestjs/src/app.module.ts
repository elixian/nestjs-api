import { AuthModule } from './auth/auth.module';
import { SecurityModule } from './shared/security.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Config } from './config/config';


@Module({

  imports: [
   
    AuthModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: Config.MONGO_URI,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }),
    }),
  ],
  controllers: [
    ],
  providers: [
    ],
})
export class AppModule { }