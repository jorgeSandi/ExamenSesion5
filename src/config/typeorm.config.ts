import {TypeOrmModuleOptions} from '@nestjs/typeorm';
/**
 * File with the configuration to the database
 */
export const typeOrmConfig: TypeOrmModuleOptions ={
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: "sesion5",
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    useUnifiedTopology: true
}