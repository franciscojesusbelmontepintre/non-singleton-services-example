import { Injectable } from '@angular/core';

@Injectable()
export class FirstTabService {

  static version: number = 0;
  title = '';

  constructor() {
    FirstTabService.version += 1;
    this.title = `FirstTabService${FirstTabService.version}`;
  }
}
