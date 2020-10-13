import { Component, OnInit,OnDestroy } from '@angular/core';
import { DataService } from "../../services/data.service";
import { DataJordan } from "../../interface/DataJordan";
import { Subject } from 'rxjs';


@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnDestroy, OnInit {

  dataJordan: DataJordan[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.getDataList();
    
  }

  getDataList() {
    this.dataService.getDataList()
      .subscribe(
        res => {
          this.dataJordan = res;
          this.dtTrigger.next();
        },
        err => console.log(err)
      )
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


}
