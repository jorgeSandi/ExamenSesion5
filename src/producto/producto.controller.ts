import { Body, Controller, Delete, Get, Logger, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductoDTO } from 'src/dtos/producto.dto';
import { Producto } from 'src/producto/producto.entity';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
    private logger = new Logger('ProductoController');

    constructor(private productoService: ProductoService){
    }

    @Get()
    obtenerTodo() {
        return this.productoService.obtenerTodo();
    };

    @Get('/obtenerProducto/:id')
    obtenerUnArticulo(@Param() params) {        
        return this.productoService.obtenerProducto(params.id);
    };
    
    @Post('/insertarProducto')
    @UsePipes(ValidationPipe)
    agregarProducto(@Body() req: ProductoDTO) {
        console.log(req);
        return this.productoService.agregarProducto(req);
    };

    @Post('/editarProducto')
    editarProducto(@Param() params, @Body() req: ProductoDTO) {
        return this.productoService.editarProducto(params.id, req);
    };

    @Delete('/eliminarProducto/:id')
    eliminarProducto(@Param('id') id:string) {
        return this.productoService.eliminarProducto(id);
    }
}
