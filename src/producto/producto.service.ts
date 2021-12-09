import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoDTO } from 'src/dtos/producto.dto';
import { Producto } from 'src/producto/producto.entity';
import { ProductoRepository } from 'src/producto/producto.repository';
import { ObjectID } from 'typeorm';

@Injectable()
export class ProductoService {
    private logger = new Logger('ProductoService');

    constructor(
        @InjectRepository(ProductoRepository)
        private productoRepository: ProductoRepository
    ){}

    async obtenerTodo() {
        console.log('ask get');
        let response = await this.productoRepository.find({});
        return response;
    }

    async obtenerProducto(idProducto:string) {
        console.log(`Obtener producto: ${idProducto}`);
        let response = await this.productoRepository.findByIds([idProducto]);
        console.log(response);
        return response;
    }

    async agregarProducto(data: ProductoDTO) {
        const news = await this.productoRepository.createProducto(data);
        console.log(news);
        return 'Producto insertado';
    }

    async editarProducto(idProducto: string, data: ProductoDTO) {
        console.log(idProducto);
        console.log(data);
        let producto: Producto[] = await this.productoRepository.findByIds([idProducto]);

        producto[0].NombreProducto = data.NombreProducto;
        producto[0].Descripcion = data.Descripcion;
        producto[0].Precio = data.Precio;
        producto[0].LugarCompra = data.LugarCompra;
        producto[0].FechaCreacion = data.FechaCreacion;

        await this.productoRepository.save(producto);

        return `Producto editado: ${idProducto}`;
    }

    async eliminarProducto(idProducto:string) {
        let producto: Producto[] = await this.productoRepository.findByIds([idProducto]);
        await this.productoRepository.remove(producto);
        return `Producto eliminado: ${idProducto}`
    }
}