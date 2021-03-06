import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import {  ApiProperty } from '@nestjs/swagger';
export class CredentialsDto {

    @IsString({message: "Le nom ne peut être vide"})
    @MinLength(4, {message: "Le nom doit avoir au moins 4 caractères"})
    @MaxLength(20)
    @ApiProperty({
        description: 'Le nom de l\'utilisateur',
        minimum: 4,
        required:true,
        maximum:20,
    })
    public username:string;

    @IsString({message: "Le mot de passe est obligatoire"})
    @MinLength(4, {message: "Le mot de passe doit avoir une longueur minimal de 4 caractères"})
    @ApiProperty(
        {
            description: 'Le mot de passe utilisateur',
            minimum: 4,
            required:true,
            maximum:50,
        }
    )
  
    public password:string;

    @IsString({message: "Selectionner un role"})
    @ApiProperty()
    public role:string
}