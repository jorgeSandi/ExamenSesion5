import { Repository, EntityRepository, MongoRepository } from "typeorm";
import { InternalServerErrorException, Logger } from "@nestjs/common";
import { Producto } from "./producto.entity";
import { ProductoDTO} from "src/dtos/producto.dto"

@EntityRepository(Producto)
export class ProductoRepository extends MongoRepository<Producto>{
    private logger = new Logger('ProductoRepository');

    createProducto(newProductoData: ProductoDTO): Promise<Producto> {
        return new Promise<Producto>((resolve, reject) => {
            const newProducto = new Producto();
            newProducto.NombreProducto = newProductoData.NombreProducto
            newProducto.Descripcion = newProductoData.Descripcion;
            newProducto.Precio = newProductoData.Precio;
            newProducto.LugarCompra = newProductoData.LugarCompra;
            newProducto.FechaCreacion = newProductoData.FechaCreacion;

            newProducto.save()
            .then(ans => resolve(ans))
            .catch(async error => {
                this.logger.error(error);
                reject(new InternalServerErrorException());
            });
        })
    }
}