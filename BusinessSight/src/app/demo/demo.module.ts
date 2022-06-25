import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoHomeComponent } from './demo-home/demo-home.component';
import { DemoNavbar1Component } from './demo-navbar1/demo-navbar1.component';



@NgModule({
  declarations: [
    DemoHomeComponent,
    DemoNavbar1Component
  ],
  imports: [
    CommonModule
  ]
})
export class DemoModule { }
