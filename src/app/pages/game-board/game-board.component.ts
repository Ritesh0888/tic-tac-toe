import { Component, OnInit } from '@angular/core';
import { TicTacHomeService } from '../tic-tac-home/tic-tac-home.service';

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
  }

  ngOnInit() {
    for (let i = 0; i < this.boardSize!; i++) {
      let data: any = [];
      for (let j = 0; j < this.boardSize!; j++) {
        data.push(this.count);
        this.count++;
      }
      data.forEach((el: any) => {
        this.dataclone.push(el);
      });
      console.log(data);

      this.twoDimensionalArray.push(data);
    }
    console.log(this.twoDimensionalArray);
  }
}
