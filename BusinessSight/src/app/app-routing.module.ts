import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { DemoHomeComponent } from './demo/demo-home/demo-home.component';

const routes: Routes = [
  //main 
  {path:'', component: HomeComponent},

  //demo
  {path:'demo', component: DemoHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
