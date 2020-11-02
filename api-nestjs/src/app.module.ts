
import { AuthModule } from './auth/auth.module';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Config } from './config/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MailModule } from './mail/mail.module';
import { UserModule } from './user/user.module';





@Module({

  imports: [
    UserModule,
    MailModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'files')
    }),
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
