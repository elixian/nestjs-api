import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { UserDocument } from './model/user.schema';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<UserDocument[]>;
    test(res: any): any;
    createUser(userDto: UserDto): Promise<UserDocument>;
    uploadedFile(file: any): Promise<{
        originalname: any;
        filename: any;
    }>;
}
