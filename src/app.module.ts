import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { UserRepository } from './repositories/user-repository';
import { PrismaUserRepository } from './repositories/prisma/prisma-user-repository';

// Providers são todos os elementos que provem alguma funcionalidade para o modulo (repositories por exemplo)
// O nest injeta os providers para os controllers automaticamente, desde que o provider tenha o decorator Injectable
// o decorator injectable permite a classe ser injetada em controllers

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    { provide: UserRepository, useClass: PrismaUserRepository },
  ],
})
export class AppModule {}
