import { JwtPayload } from './jwt.payload';
import { Model } from "mongoose";
import { UserDocument } from '../user/model/user.schema';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    validate(payload: JwtPayload): Promise<UserDocument>;
}
export {};
