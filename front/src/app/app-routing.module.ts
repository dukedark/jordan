import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataListComponent } from './component/data-list/data-list.component'

const routes: Routes = [
  {
    path: '',
    component:DataListComponent
  },
  {
    path: 'dataList',
    component:DataListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
