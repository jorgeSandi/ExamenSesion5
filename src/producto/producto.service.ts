import { Injectable, Logger } from '@nestjs/common';
import { Producto } from 'src/producto/producto.entity';
import { ProductoRepository } from 'src/producto/producto.repository';

@Injectable()
export class ProductoService {
    private logger = new Logger('ProductoService');

    constructor(
        //private productoRepository: ProductoRepository
    ){}

    obtenerTodo(): string {
        return 'Obtener Todo. OK';
    }

    obtenerProducto(idProducto:number): string {
        console.log(idProducto);
        return `Obtener producto: ${idProducto}`;
    }

    agregarProducto(data: Object): string {
        return 'Producto insertado';
    }

    editarProducto(idProducto: number, data: Object): string {
        console.log(idProducto);
        console.log(data);
        return 'Producto editado';
    }

    eliminarProducto(idProducto:string): string {
        return `Producto eliminado: ${idProducto}`
    }
}