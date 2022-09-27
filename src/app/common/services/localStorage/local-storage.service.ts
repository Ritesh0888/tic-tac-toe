import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setNumber(number: any) {
    localStorage.setItem('INPUT_NUMBER', number);
  }

  getNumber() {
    return localStorage.getItem('INPUT_NUMBER');
  }

  removeNumber() {
    return localStorage.removeItem('INPUT_NUMBER');
  }
}
