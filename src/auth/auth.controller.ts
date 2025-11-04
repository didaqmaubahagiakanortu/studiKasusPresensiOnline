import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userLoginDto } from './dto/user-login.dto';

@Controller('api/auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('login')
    @UsePipes(new ValidationPipe)
    signIn(@Body() userLoginDto: userLoginDto) {
        return this.authService.signIn(userLoginDto)
    }

}
