import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicTacHomeService {
  number?: number;
  constructor() {}

  setNumber(number: number) {
    this.number = number;
  }

  // getNumber() {
  //   return this.number;
  // }
}
