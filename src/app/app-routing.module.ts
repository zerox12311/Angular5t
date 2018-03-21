import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { DyclassComponent } from './dyclass/dyclass.component';
import { Jq1Component } from './jq1/jq1.component';
import { Lesson7Component } from './lesson7/lesson7.component';
import { CallhttpComponent } from './callhttp/callhttp.component';
import { NgModelDrivenComponent } from './ng-model-driven/ng-model-driven.component';

const routes: Routes = [
    {path:'',redirectTo:'lesson1',pathMatch:'full'},
    {path:'lesson1',component:Lesson1Component},
    {path:'lesson2',component:Lesson2Component},
    {path:'dyclass',component:DyclassComponent},
    {path:'dyclass/:number/:number2',component:DyclassComponent},
    {path:'jq1',component:Jq1Component},
    {path:'lesson7',component:Lesson7Component},
    {path:'callhttp',component:CallhttpComponent},
    {path:'ngmod',component:NgModelDrivenComponent},
    {path:'**', component:Lesson3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
