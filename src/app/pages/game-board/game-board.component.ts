import { Component, OnInit } from '@angular/core';
import { TicTacHomeService } from 'src/app/common/services/Home/home.service';

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
  activePlayer: string = 'X';

  constructor(private ticTacHomeService: TicTacHomeService) {
    this.boardSize = ticTacHomeService.number;
    this.getTwoDimensionArray();
  }

  ngOnInit() {
    let grid: any = document.getElementById('box');
    grid.style = ` grid-template-columns: repeat(${this.boardSize}, minmax(100px, 100px)`;
    grid.style.gridTemplateRows = `repeat(${this.boardSize}, minmax(100px, 100px)`;
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
        this.dataclone.push(el);
      });

      this.twoDimensionalArray.push(data);
    }
  }

  playerMoveShow(index: number) {}
}
