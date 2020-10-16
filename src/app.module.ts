import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Config } from './config/config';


@Module({

  imports: [
    UserModule,
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
    AuthController],
  providers: [
    AuthService],
})
export class AppModule { }
