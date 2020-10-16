import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserDocument, UserSchema } from './model/user.schema';

@Module({
    imports: [
        MongooseModule.forFeatureAsync(
            [
                {
                name: User.name,
                useFactory: async () => {
                    const schema: any = UserSchema;
                    schema.pre('save', async function (next: any) {
                        if(!this.createdAt){
                            this.createdAt = new Date();
                        }
                        
                        next();
                    });
                    return schema;
                },
            }
            ]
        )
   
    ],
    controllers: [UserController],
    providers: [UserService],
    exports:[
        UserService
    ]

})
export class UserModule {}
