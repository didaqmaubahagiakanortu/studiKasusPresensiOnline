import { IsNumber, IsOptional, IsString } from "class-validator";
import { createUserDto } from "./create-user.dto";
import { PartialType } from "@nestjs/mapped-types";

export class updateUserDto extends PartialType(createUserDto) {

    @IsOptional()
    @IsString()
    username: string;

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    password: string

    @IsOptional()
    @IsString()
    role: string;

}