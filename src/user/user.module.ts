import { SecurityModule } from './../shared/security.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema, UserDocument } from './model/user.schema';
import { HashSecurity } from '../shared/hash/hash.security';

@Module({
    imports: [
        SecurityModule,
        MongooseModule.forFeatureAsync(
            [
                {
                    name: User.name,
                    useFactory: async () => {
                        const schema: any = UserSchema;
                        schema.pre('save', async function (next: any) {
                            try {
                                if (!this.createdAt) {
                                    this.createdAt = new Date();
                                }
                                if (this.isModified('password')) {
                                    const hashedPassword = await HashSecurity.genHashPassword(this.password);
                                    this.password = hashedPassword;
                                }
                                next();
                            } catch (error) {
                                next(error);
                            }
                        });
                        return schema;
                    },
                }
            ]
        )

    ],
    controllers: [UserController],
    providers: [UserService,],
    exports: [
        UserService
    ]

})
export class UserModule { }
