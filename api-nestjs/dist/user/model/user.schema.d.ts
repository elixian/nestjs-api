import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    createdAt: Date;
    username: string;
    password: string;
}
export declare const UserSchema: import("mongoose").Schema<any>;
