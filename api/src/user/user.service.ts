import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserResponse, UserResponseGlobal } from './dto/user.dto';
import { typeUser } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) { }

    async getUsers(): Promise<UserResponse[]> {
        return (await this.prismaService.user.findMany()).map(
            user => new UserResponse(user)
        )
    }

    async getUser(param: number) {
        const user = await this.prismaService.user.findUnique({
            where: {
                id: param
            }
        })
        if (!user) throw new NotFoundException("user not found")
        return new UserResponse(user)
    }

    async updateUser(param: number, data, user): Promise<UserResponse> {
        const userUpdate = await this.prismaService.user.findUnique({
            where: {
                id: param
            }
        })
        if (user.id !== userUpdate.id && user.role !== typeUser.ADMIN) {
            throw new ForbiddenException("You are not the right")
        }

        if (user.id !== userUpdate.id) {
            delete data.username
            delete data.address
            delete data.image
        }


        return new UserResponse(await this.prismaService.user.update({
            where: {
                id: param
            },
            data
        }))
    }

    async deleteUser(param: number): Promise<string> {
        await this.prismaService.user.update({
            where: {
                id: param
            },
            data: {
                banned: true
            }
        })
        return "successfully"
    }

    async getUserGlobal(userId: number) {
        const user = await this.prismaService.user.findUnique({
            where: {
                id: userId
            }
        })
        if (!user) throw new NotFoundException("user not found")
        return new UserResponseGlobal(user)
    }
}
