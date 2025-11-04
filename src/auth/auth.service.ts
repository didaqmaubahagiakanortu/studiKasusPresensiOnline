import { Injectable, UnauthorizedException } from '@nestjs/common';
import { userLoginDto } from './dto/user-login.dto';
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService) {}

    private readonly token: string[] = []

    signIn(userLoginDto: userLoginDto) {
        try {
            this.token.push(userLoginDto.password)
            return {
                status: 'success',
                message: 'Login successful',
                token: userLoginDto.password
            }
        } catch (error) {
            return {
                status: 'failed',
                message: `Error when login: ${error}`,
                token: null
            }
        }
    }

}
