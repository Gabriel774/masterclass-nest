import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateUserBody } from './dtos/create-user-body';
import { UserRepository } from './repositories/user-repository';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService, private UserRepository: UserRepository) {}

  @Post()
  async createUser(@Body() body: CreateUserBody): Promise<Object> {
    console.log(body);

    const member = await this.UserRepository.create(body.name, body.function)

    // const member = await this.prisma.user.create({
    //   data: {
    //     id: randomUUID(),
    //     name: body.name,
    //     function: body.function,
    //   },
    // });

    return member;
  }
}
