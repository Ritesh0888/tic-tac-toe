import { Component, OnInit } from '@angular/core';
import { TicTacHomeService } from '../tic-tac-home/tic-tac-home.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})
export class GameBoardComponent implements OnInit {
  board = [];
  boardSize?: number;
  activePlayer: string = 'X';
  turnCount?: 0;
  isGameRunning: boolean = false;
  isGameOver: boolean = false;
  winner: boolean = false;

  constructor(private ticTacHomeService: TicTacHomeService) {}

  ngOnInit() {}
}
