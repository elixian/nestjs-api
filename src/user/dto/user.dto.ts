import { IsString, MaxLength, MinLength } from "class-validator";

export class UserDto {
    // createdAt:string;
    @IsString()
    @MinLength(4, {message: "Le nom doit avoir au moins 4 caractères"})
    @MaxLength(20)
    username:string;

    @IsString()
    @MinLength(4)
    @MaxLength(1025)
    password:string;
}