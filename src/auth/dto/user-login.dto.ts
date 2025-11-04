import { IsNotEmpty, IsString } from "class-validator";

export class userLoginDto {

    @IsNotEmpty()
    @IsString()
    'name' : string;

    @IsNotEmpty()
    @IsString()
    'password' : string;
    
}