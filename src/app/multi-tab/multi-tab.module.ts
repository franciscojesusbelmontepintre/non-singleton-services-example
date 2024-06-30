import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiTabComponent } from './multi-tab.component';
import { SecondTabModule } from './components/second-tab/second-tab.module';
import { FirstTabModule } from './components/first-tab/first-tab.module';
import { MultiTabRoutingModule } from './multi-tab-routing.module';
import { NonSingletonServicesModule } from './modules/non-singleton-services.module';

@NgModule({
  declarations: [MultiTabComponent],
  imports: [
    CommonModule,
    FirstTabModule,
    SecondTabModule,
    MultiTabRoutingModule,
    NonSingletonServicesModule
  ]
})
export class MultiTabModule { }
