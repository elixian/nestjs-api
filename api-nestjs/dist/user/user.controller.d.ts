import { UserService } from './user.service';
import { UserDocument } from './model/user.schema';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<UserDocument[]>;
    uploadedFile(file: any): Promise<{
        originalname: any;
        filename: any;
    }>;
}
