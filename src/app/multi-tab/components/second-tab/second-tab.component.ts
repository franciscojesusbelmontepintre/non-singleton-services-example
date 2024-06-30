import { Component, OnInit, inject } from '@angular/core';
import { SecondTabService } from './services/second-tab.service';
import { SECOND_TAB_SERVICE_TOKEN } from 'src/app/tokens/second-tab-service.token';

@Component({
  selector: 'app-second-tab',
  templateUrl: './second-tab.component.html',
  styleUrls: ['./second-tab.component.scss']
})
export class SecondTabComponent implements OnInit {

  get title() {
    return this.secondTabService.title;
  }

  constructor(
    public secondTabService: SecondTabService = (() => {
      return (inject(SECOND_TAB_SERVICE_TOKEN)).getValue();
    })(),
  ) { }

  ngOnInit(): void {
  }

}
