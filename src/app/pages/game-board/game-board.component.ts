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
    // this.setGridStyle(this.boardSize);
  }

  ngOnInit() {
    let grid: any = document.getElementById('container');
    grid.style = ' grid-template-columns: repeat(3, minmax(0, 100px))';
    console.log(grid);
  }

  getTwoDimensionArray() {
    for (let i = 0; i < this.boardSize!; i++) {
      let data: Array<number> = [];
      for (let j = 0; j < this.boardSize!; j++) {
        data.push(this.count);
        this.count++;
        console.log('inside forst loop', data);
      }
      console.log('outside first loop', data);

      data.forEach((el: any) => {
        this.dataclone.push(el);
      });

      this.twoDimensionalArray.push(data);
    }
    console.log(this.twoDimensionalArray);
  }

  // setGridStyle(number: any) {}
}
