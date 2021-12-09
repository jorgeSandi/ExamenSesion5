import { Body, Controller, Delete, Get, Logger, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiNotFoundResponse, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductoDTO } from 'src/dtos/producto.dto';
import { Producto } from 'src/producto/producto.entity';
import { ProductoService } from './producto.service';

@ApiTags('request producto')
@Controller('producto')
export class ProductoController {
    private logger = new Logger('ProductoController');

    constructor(private productoService: ProductoService){}

    @Get()
    @ApiOperation({ summary: 'Devuelve todos los productos de la base de datos' })
    @ApiResponse({ status: 200, type: Object })
    async obtenerTodo() {
        return await this.productoService.obtenerTodo();
    };

    @Get('/obtenerProducto/:idProducto')
    @ApiOperation({ summary: 'Retorna el producto por ID' })
    @ApiQuery({ name: 'Producto', type: Object })
    @ApiParam({ name: 'idProducto' })
    @ApiNotFoundResponse({ description: 'No se encuentra el producto' })
    obtenerProducto(@Param() params) {        
        return this.productoService.obtenerProducto(params.idProducto);
    };
    
    @Post('/insertarProducto')
    @ApiOperation({ summary: 'Inserta un nuevo producto a la base de datos' })
    @UsePipes(ValidationPipe)
    @ApiBody({ required: true, type: ProductoDTO })
    async agregarProducto(@Body() req: ProductoDTO) {
        console.log(req);
        return await this.productoService.agregarProducto(req);
    };

    @Post('/editarProducto/:idProducto')
    @ApiOperation({ summary: 'Edita un producto existente en la base de datos' })
    @UsePipes(ValidationPipe)
    @ApiParam({ name: 'idProducto' })
    @ApiBody({ required: true, type: ProductoDTO })
    async editarProducto(@Param() params, @Body() req: ProductoDTO) {
        return await this.productoService.editarProducto(params.idProducto, req);
    };

    @Delete('/eliminarProducto/:idProducto')
    @ApiOperation({ summary: 'Elimina el producto por ID' })
    @ApiParam({ name: 'idProducto' })
    async eliminarProducto(@Param('idProducto') idProducto:string) {
        return await this.productoService.eliminarProducto(idProducto);
    }
}
