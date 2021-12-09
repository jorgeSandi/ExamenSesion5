import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoController } from './producto.controller';
import { ProductoRepository } from './producto.repository';
import { ProductoService } from './producto.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductoRepository])],
  controllers: [ProductoController],
  providers: [ProductoService ],
})
export class ProductoModule {}
