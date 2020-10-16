import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    createdAt: Date;
    @Prop({
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 25
    })
    username: string;

    @Prop({
        required: true,
        maxlength: 1025
    })
    password: string
}

export const UserSchema = SchemaFactory.createForClass(User);