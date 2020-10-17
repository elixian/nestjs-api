import { JwtPayload } from './jwt.payload';
import { IToken } from './interface/IToken';
import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import {Strategy,ExtractJwt} from 'passport-jwt';
import { UserDocument } from "src/user/model/user.schema";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectModel('User')
        private userModel: Model<UserDocument>,
    ){
        
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey : 'toto',
        })
    } 

    async validate( payload: JwtPayload) {
       const {username} = payload;
       const user = this.userModel.findOne({username})

       if(!user){
           throw new UnauthorizedException('Non autorisé');
       }
       return user;
    }
}