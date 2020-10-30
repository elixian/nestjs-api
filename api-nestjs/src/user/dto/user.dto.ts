import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";

export class UserDto {
    // createdAt:string;
    @IsString()
    @MinLength(4, {message: "Le nom doit avoir au moins 4 caractères"})
    @MaxLength(20)
    @ApiProperty(
        {
            description: 'Le nom utilisateur',
            minimum: 4,
            required:true,
            maximum:20,
        }
    )
    username:string;

    @IsString()
    @MinLength(4)
    @MaxLength(50)
    @ApiProperty(
        {
            description: 'Mot de passe utilisateur',
            minimum: 4,
            required:true,
            maximum:50,
        }
    )
    password:string;

    @IsString()
    @ApiProperty(
        {
            description: 'Role utilisateur',
            minimum: 4,
            required:true,
            maximum:50,
        }
    )
    role:string;
}