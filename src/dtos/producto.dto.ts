import { IsNotEmpty, IsOptional, IsEnum, ValidateNested, IsString, IsNumber } from 'class-validator';
import { isInt16Array } from 'util/types';

export class ProductoDTO{

    @IsNotEmpty()
    @IsString()
    NombreProducto: String;

    @IsNotEmpty()
    @IsString()
    Descripcion: String;

    @IsNotEmpty()
    @IsNumber()
    Precio: number;

    @IsNotEmpty()
    LugarCompra: any[];

    @IsNotEmpty()
    FechaCreacion: Date;
}