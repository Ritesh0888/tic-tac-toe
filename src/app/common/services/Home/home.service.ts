import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TicTacHomeService {
  number?: number;
  constructor(private localStorageService: LocalStorageService) {}

  setNumber(number: number) {
    this.localStorageService.setNumber(number);
  }

  setPlayerMove(cloneData: any) {
    this.localStorageService.setPlayerMove(cloneData);
  }

  // getNumber() {
  //   return this.number;
  // }
}
