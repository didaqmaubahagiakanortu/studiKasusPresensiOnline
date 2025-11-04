import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';
import { User } from './users.interface';

@Injectable()
export class UsersService {

    usersDummyData: User[] = [
        {
            id: 1,
            name: 'Developer',
            username: 'Dev123',
            password: 'adminpassword',
            role: 'admin'
        }
    ]

    create(createUserDto: createUserDto) {
        try {
            this.usersDummyData.push({
                id: this.usersDummyData.length + 1,
                name: createUserDto.name,
                username: createUserDto.username,
                password: createUserDto.password,
                role: createUserDto.role
            })
            const index = this.usersDummyData.findIndex(u => u.name === createUserDto.name)
            return {
                status: 'success',
                message: 'User added successfully',
                data: this.usersDummyData[index]
            }
        } catch (error) {
            return {
                status: 'failed',
                message: `Error when adding user: ${error}`,
                data: null
            }
        }
    }

    update(id: number, updateUserDto: updateUserDto) {
        try {
            const index = this.usersDummyData.findIndex(u => u.id === id)
            this.usersDummyData[index] = {
                id: this.usersDummyData[index].id,
                name: updateUserDto.name,
                username: updateUserDto.username,
                password: updateUserDto.password,
                role: updateUserDto.role
            }
            return {
                status: 'success',
                message: 'User updated successfully',
                data: this.usersDummyData[index]
            }
        } catch (error) {
            return {
                status: 'failed',
                message: `Error when updating user; ${error}`,
                data: null
            }
        }
    }

    findId(id: number) {
        try {
            const index = this.usersDummyData.findIndex(u => u.id === id)
            return {
                status: 'success',
                message: 'User found successfully',
                data: this.usersDummyData[index]
            }
        } catch (error) {
            return {
                status: 'failed',
                message: `Error when finding user: ${error}`,
                data: null
            }
        }
    }

    findName(name: string) {
        const index = this.usersDummyData.findIndex(u => u.name === name)
        return this.usersDummyData[index] 
    }

}
