import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoService } from './producto/producto.service';
import { ProductoController } from './producto/producto.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductoController],
  providers: [AppService, ProductoService],
})
export class AppModule {}
