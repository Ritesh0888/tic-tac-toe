import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  playerMoves: any;
  constructor() {}

  setNumber(number: any) {
    localStorage.setItem('INPUT_NUMBER', number);
  }

  setPlayerMove(cloneData: any) {
    this.playerMoves = cloneData;
    localStorage.setItem('PLAYER_MOVE', JSON.stringify(this.playerMoves));
  }

  getNumber() {
    return localStorage.getItem('INPUT_NUMBER');
  }

  getPlayerMove() {
    return localStorage.getItem('PLAYER_MOVE');
  }

  removeNumber() {
    return localStorage.removeItem('INPUT_NUMBER');
  }
}
