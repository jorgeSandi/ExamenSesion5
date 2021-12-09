import {BaseEntity, Entity, Column, ObjectIdColumn, Double} from 'typeorm';

/**
 * Entity
 */
@Entity()
export class Producto extends BaseEntity{

    @ObjectIdColumn()
    IdProducto: String;

    @Column()
    NombreProducto: String;

    @Column()
    Descripcion: String;

    @Column()
    Precio: number;

    @Column()
    LugarCompra: any[];

    @Column()
    FechaCreacion: Date;
}