import { Injectable } from '@nestjs/common';
import { Data } from './interface/Data';

const DATA = require('./../../../data/data.json')

@Injectable()
export class DataService {
    dataJorda: Data[] = DATA.data;

    getDataJordan(idjob: string): Data {
        console.log(idjob);
        return this.dataJorda.find(dataJorda => dataJorda.idjob === idjob);
    }
    getDatasJordan(): Data[] {
        return this.dataJorda;
    }
}
