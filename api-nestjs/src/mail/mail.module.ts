import { MailService } from './mail.provider';
import { Module } from "@nestjs/common";
import { MailerModule, MailerService } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

@Module({
    imports: [
        
    MailerModule.forRoot({
        transport:{
          host: 'smtp.ethereal.email',
          port: 587,
          auth:{
              user: "deron.doyle37@ethereal.email",
              pass:"TGsEqsZre93paAWKrd"
          }
        },
        defaults: {
          from:'"nest-modules" <modules@nestjs.com>',
        },
        template: {
          dir: process.cwd() + '/templates/',
          adapter: new PugAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    ],
    exports:[
        MailService
    ],
    controllers: [],
    providers: [MailService],
  
})
export class MailModule { }
