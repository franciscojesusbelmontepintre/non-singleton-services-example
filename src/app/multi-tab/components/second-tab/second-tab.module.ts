import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondTabComponent } from './second-tab.component';



@NgModule({
  declarations: [SecondTabComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SecondTabComponent
  ]
})
export class SecondTabModule { }
