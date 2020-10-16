import { Injectable } from '@nestjs/common';
import {  genSalt,hash ,compare} from 'bcrypt';

@Injectable()
export class HashSecurity{



    static  async genHashPassword(password:string):Promise<string>{
        const salt = await genSalt(10);
     return await hash(password, salt);

    }

    static async validatePassword(password:string,hashed:string):Promise<boolean>{

        return await compare(password,hashed);

    }


}