import {BaseEntity, Entity, Column, ObjectIdColumn, Double} from 'typeorm';

/**
 * Entity
 */
@Entity()
export class Producto extends BaseEntity{

    @ObjectIdColumn()
    _id: string;

    @Column()
    NombreProducto: string;

    @Column()
    Descripcion: string;

    @Column()
    Precio: number;

    @Column()
    LugarCompra: string[];

    @Column()
    FechaCreacion: Date;
}