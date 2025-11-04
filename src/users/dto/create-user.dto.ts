import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class createUserDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    role: string;

}