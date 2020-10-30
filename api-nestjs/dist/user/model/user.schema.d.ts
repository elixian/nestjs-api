import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    createdAt: Date;
    username: string;
    password: string;
    role: string;
}
export declare const UserSchema: import("mongoose").Schema<any>;
