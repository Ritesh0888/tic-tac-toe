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
  activePlayer: string = 'X';
  turnCount?: 0;
  isGameRunning: boolean = false;
  isGameOver: boolean = false;
  winner: boolean = false;
  COLORS = ['#FE9', '#9AF', '#F9A', '#AFA', '#FA7'];

  constructor(private ticTacHomeService: TicTacHomeService) {
    this.boardSize = ticTacHomeService.number;
    this.getTwoDimensionArray();
  }

  ngOnInit() {
    let grid: any = document.getElementById('box');
    grid.style = ` grid-template-columns: repeat(${this.boardSize}, minmax(100px, 100px)`;
    grid.style.gridTemplateRows = `repeat(${this.boardSize}, minmax(100px, 100px)`;

    let color: any = document.getElementById('id');
    console.log(color);
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

  playerMoveShow(index: number) {
    let color: any = document.getElementById('id');
    console.log(color);
  }
}
