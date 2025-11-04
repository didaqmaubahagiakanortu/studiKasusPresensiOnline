import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class timerangeAttendanceDto {

    @IsNotEmpty()
    @IsString()
    start_date: string;

    @IsNotEmpty()
    @IsString()
    end_date: string;

    @IsNotEmpty()
    @IsString()
    group_by: string;

}