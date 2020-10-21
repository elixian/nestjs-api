import { ConflictException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { IUser } from './interface/Iusers.services';
import {User, UserDocument} from './model/user.schema'

@Injectable()
export class UserService implements IUser {
    constructor(
        @InjectModel(User.name)
        private userModel : Model<UserDocument>
    ){  }

    async createUser(userDto : UserDto):Promise<UserDocument>{
        const user:UserDocument =  new this.userModel(userDto);
        try {
            await user.save();
        } catch (error) {
            if(error.code === 11000){
                throw new ConflictException('Username already exist');
            }else{
                throw new InternalServerErrorException();
            }
        }

        return user;
    }

    async getUserByName(username: string):Promise<UserDocument>{
        const user = await this.userModel.findOne({username});
        if(!user){
            throw new NotFoundException();
        }
        return user;
    }

    async getListUsers():Promise<UserDocument[]>{
        
        const user:UserDocument[] = await this.userModel.find();
        Logger.debug(`user service => ${user}`)
        if(!user.length ){
            throw new NotFoundException();
        }
        return user;
    }

}
