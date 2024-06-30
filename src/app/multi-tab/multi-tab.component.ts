import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-multi-tab',
  templateUrl: './multi-tab.component.html',
  styleUrls: ['./multi-tab.component.scss']
})
export class MultiTabComponent implements OnInit {

  get component() {
    return ((this.activatedRoute.data as Observable<Data> & { _value: Data })._value as { component: string }).component
  }

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }

}
