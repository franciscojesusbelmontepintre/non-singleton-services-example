import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstTabComponent } from './first-tab.component';



@NgModule({
  declarations: [FirstTabComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FirstTabComponent
  ]
})
export class FirstTabModule { }
