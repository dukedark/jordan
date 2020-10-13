import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DataService } from './data.service';
import { Data } from './interface/data'
@Controller('data')
export class DataController {

    constructor(private dataService: DataService) {

    }
    /**
     * Metodo Get
     * obtiene una lista de datos
     * */
    @Get()
    getDatas(): Data[] {
        return this.dataService.getDatasJordan();
    }
    /**
     * Metodo Get
     * metodo obtiene una lista de datos
     * */
    @Get('idjob')
    getData(@Param('idjob') idjob): Data {
        console.log(idjob);
        return this.dataService.getDataJordan(idjob);
    }
    /**
     * Metodo Post
     * metodo crea data
     * */
    @Post("/creatData")
    createData() {
        //TODO
        return "Creating data";
    }
    /**
     * Metodo Put
     * metodo actualiza data
     * */
    @Put("/updateData")
    updateData() {
        //TODO
        return "Update data";
    }
    /**
     * Metodo Delete
     * metodo Elimina data
     * */
    @Delete("/deleteData")
    deleteData() {
        //TODO
        return "Delete data"
    }
}
