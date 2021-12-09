import { IsNotEmpty, IsOptional, IsEnum, ValidateNested, IsString, IsNumber } from 'class-validator';

export class ProductoDTO{

    //Nombre del producto
    @IsNotEmpty()
    @IsString()
    NombreProducto: string;

    //Descripcion del producto
    @IsNotEmpty()
    @IsString()
    Descripcion: string;

    //Precio del producto
    @IsNotEmpty()
    @IsNumber()
    Precio: number;

    //Array con lugares de compra
    @IsNotEmpty()
    LugarCompra: string[];

    //Fecha de Creacción del objeto.
    @IsNotEmpty()
    FechaCreacion: Date;
}