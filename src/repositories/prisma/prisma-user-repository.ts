import { PrismaService } from 'src/database/prisma.service';
import { UserRepository } from '../user-repository';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, userFunction: string): Promise<Object> {
    const res = await this.prisma.user.create({
      data: {
        id: randomUUID(),
        name,
        function: userFunction,
      },
    });
    
    return res
  }
}
