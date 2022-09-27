import { Component, OnInit } from '@angular/core';
import { TicTacHomeService } from 'src/app/common/services/Home/home.service';
import { LocalStorageService } from 'src/app/common/services/localStorage/local-storage.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})
export class GameBoardComponent implements OnInit {
  twoDimensionalArray: any = [];
  dataclone: any = [];
  count = 1;
  boardSize?: number;
  turnCount?: 0;
  isGameRunning: boolean = false;
  isGameOver: boolean = false;
  winner: boolean = false;

  lastIndex?: number;
  lastColor?: string = 'red';
  activePlayer: string = 'X';
  playerMove: any;

  constructor(
    public localStorageService: LocalStorageService,
    public ticTacHomeService: TicTacHomeService
  ) {
    this.boardSize = JSON.parse(localStorageService.getNumber() || '');
    this.playerMove = localStorageService.getPlayerMove();
    this.getTwoDimensionArray();
    // this.dataclone = JSON.parse(this.playerMove);
  }

  ngOnInit() {
    let grid: any = document.getElementById('box');
    grid.style = ` grid-template-columns: repeat(${this.boardSize}, minmax(100px, 100px)`;
    grid.style.gridTemplateRows = `repeat(${this.boardSize}, minmax(100px, 100px)`;

    console.log(this.dataclone);
    console.log(JSON.parse(this.playerMove));
  }

  // Get two dimention array
  getTwoDimensionArray() {
    for (let i = 0; i < this.boardSize!; i++) {
      let data: any = [];
      for (let j = 0; j < this.boardSize!; j++) {
        data.push(this.count);
        this.count++;
      }
      data.forEach((el: any) => {
        this.dataclone.push('');
      });

      this.twoDimensionalArray.push(data);
    }
  }

  playerMoveShow(index: number) {
    if (this.lastIndex != index && this.dataclone.includes('')) {
      this.lastIndex = index;
      if (this.dataclone[index] != '') {
        console.log();
      } else {
        if (!this.dataclone.includes('X')) {
          this.dataclone[index] = this.activePlayer;
        } else if (this.activePlayer === 'X') {
          this.activePlayer = '0';
          this.dataclone[index] = this.activePlayer;
        } else if (this.activePlayer === '0') {
          this.activePlayer = 'X';
          this.dataclone[index] = this.activePlayer;
        }
      }
      this.ticTacHomeService.setPlayerMove(this.activePlayer);
    }
    this.changeBgColor();
  }

  changeBgColor() {}
}
