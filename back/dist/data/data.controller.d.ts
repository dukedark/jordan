import { DataService } from './data.service';
import { Data } from './interface/data';
export declare class DataController {
    private dataService;
    constructor(dataService: DataService);
    getDatas(): Data[];
    getData(idjob: any): Data;
    createData(): string;
    updateData(): string;
    deleteData(): string;
}
