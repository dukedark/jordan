"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataService = void 0;
const common_1 = require("@nestjs/common");
const DATA = require('./../../../data/data.json');
let DataService = class DataService {
    constructor() {
        this.dataJorda = DATA.data;
    }
    getDataJordan(idjob) {
        console.log(idjob);
        return this.dataJorda.find(dataJorda => dataJorda.idjob === idjob);
    }
    getDatasJordan() {
        return this.dataJorda;
    }
};
DataService = __decorate([
    common_1.Injectable()
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map