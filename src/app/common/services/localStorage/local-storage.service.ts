import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  playerMoves?: any = [];
  constructor() {}

  setNumber(number: any) {
    localStorage.setItem('INPUT_NUMBER', number);
  }

  setPlayerMove(playerMove: string) {
    localStorage.setItem('PLAYER_MOVE', JSON.stringify(this.playerMoves));
    this.playerMoves?.push(playerMove);
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
