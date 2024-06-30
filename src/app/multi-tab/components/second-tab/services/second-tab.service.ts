import { Injectable } from '@angular/core';

@Injectable()
export class SecondTabService {

  static version: number = 0;
  title = '';

  constructor() {
    SecondTabService.version += 1;
    this.title = `SecondTabService${SecondTabService.version}`;
  }
}
