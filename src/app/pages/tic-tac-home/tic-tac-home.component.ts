import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tic-tac-home',
  templateUrl: './tic-tac-home.component.html',
  styleUrls: ['./tic-tac-home.component.css'],
})
export class TicTacHomeComponent implements OnInit {
  currentPlayer: string = '';
  winner: string = '';
  constructor(private router: Router) {}

  ngOnInit() {}

  openInput() {
    this.router.navigate(['/input']);
  }
}
