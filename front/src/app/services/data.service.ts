import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { DataJordan } from "../interface/DataJordan";



@Injectable({
  providedIn: 'root'
})
export class DataService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getDataList():Observable<DataJordan[]> { 
    return this.httpClient.get<DataJordan[]>(`${this.BASE_URL}/data`);
  }

}
