import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AttendanceController } from './attendance/attendance.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AttendanceService } from './attendance/attendance.service';


@Module({
  controllers: [AppController, AuthController, UsersController, AttendanceController],
  providers: [AppService, AuthService, UsersService, AttendanceService],
  exports: [AppModule]
})
export class AppModule {}
