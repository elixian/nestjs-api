import { IsString, MaxLength, MinLength } from "class-validator";

export class CredentialsDto {

    @IsString()
    @MinLength(4, {message: "Le nom doit avoir au moins 4 caractères"})
    @MaxLength(20)
    public username:string;

    @IsString()
    @MinLength(4, {message: "Le mot de passe doit avoir une longueur minimal de 4 caractères"})
    @MaxLength(50)
    public password:string;
}