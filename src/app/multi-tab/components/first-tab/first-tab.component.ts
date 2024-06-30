import { Component, OnInit, inject } from '@angular/core';
import { FirstTabService } from './services/first-tab.service';
import { FIRST_TAB_SERVICE_TOKEN } from 'src/app/tokens/first-tab-service.token';

@Component({
  selector: 'app-first-tab',
  templateUrl: './first-tab.component.html',
  styleUrls: ['./first-tab.component.scss']
})
export class FirstTabComponent implements OnInit {

  get title() {
    return this.firstTabService.title;
  }

  constructor(
    public firstTabService: FirstTabService = (() => {
      return (inject(FIRST_TAB_SERVICE_TOKEN)).getValue();
    })()
  ) { }

  ngOnInit(): void {
  }

}
