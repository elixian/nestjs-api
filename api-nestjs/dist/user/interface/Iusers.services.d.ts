import { UserDto } from "../dto/user.dto";
import { UserDocument } from "../model/user.schema";
export interface IUser {
    createUser(userDto: UserDto): Promise<UserDocument | null>;
    getUserByName(username: string): Promise<UserDocument | null>;
    getListUsers(): Promise<UserDocument[] | null>;
}
