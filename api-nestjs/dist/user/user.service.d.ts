import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { IUser } from './interface/Iusers.services';
import { UserDocument } from './model/user.schema';
export declare class UserService implements IUser {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    createUser(userDto: UserDto): Promise<UserDocument>;
    getUserByName(username: string): Promise<UserDocument>;
    getListUsers(): Promise<UserDocument[]>;
}
