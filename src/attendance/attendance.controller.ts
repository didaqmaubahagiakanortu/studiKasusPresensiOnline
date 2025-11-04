import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { userAttendanceDto } from './dto/user-attendance.dto';
import { timerangeAttendanceDto } from './dto/timerange-attendance.dto';

@Controller('api/attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post()
  @UsePipes(new ValidationPipe)
  present(@Body() userAttendanceDto: userAttendanceDto) {
    return this.attendanceService.present(userAttendanceDto)
  }

  @Get(`history/:id`)
  findHistory(@Param(`id`) id: string) {
    return this.attendanceService.findHistory(+id)
  }

  @Get(`summary/:id`)
  summary(@Param(`id`) id: string) {
    return this.attendanceService.summary(+id)
  }

  @Get('analysis')
  @UsePipes(new ValidationPipe)
  analysis(@Body() timerangeAttendanceDto: timerangeAttendanceDto) {
    return this.attendanceService
  }

}
