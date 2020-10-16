import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import {User, UserDocument} from './model/user.schema'

@Injectable()
export class UserService {
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

}
