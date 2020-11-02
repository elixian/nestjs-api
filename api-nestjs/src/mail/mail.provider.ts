import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common"



@Injectable()
export class MailService{
    constructor(
        private readonly mailerService: MailerService
    ){  }
    
    public sendMail(data):void{
        this
      .mailerService
      .sendMail({
        to: 'test@nestjs.com', // list of receivers
        from: 'noreply@nestjs.com', // sender address
        subject: 'Testing Nest MailerModule ✔', // Subject line
        text: 'welcome', // plaintext body
        template:'index',
        context:{
            ...data
        }
      })
      .then((success) => {console.log(success)})
      .catch((err) => {console.log(err)});
  
    }
}