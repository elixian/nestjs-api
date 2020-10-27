import { UserService } from './user.service';
import { UserDocument } from './model/user.schema';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<UserDocument[]>;
    test(res: any): any;
    uploadedFile(file: any): Promise<{
        originalname: any;
        filename: any;
    }>;
}
