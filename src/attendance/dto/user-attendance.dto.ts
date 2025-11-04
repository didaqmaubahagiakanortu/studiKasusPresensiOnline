import { IsNotEmpty, IsNumber, IsString, IsTimeZone } from "class-validator";

export class userAttendanceDto {

    @IsNotEmpty()
    @IsNumber()
    user_id: number;

    @IsNotEmpty()
    @IsString()
    status: string;

}