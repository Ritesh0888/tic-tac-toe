import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameBoardComponent } from './pages/game-board/game-board.component';
import { InputComponent } from './pages/input/input.component';
import { TicTacHomeComponent } from './pages/tic-tac-home/tic-tac-home.component';

const routes: Routes = [
  {
    path: '',
    component: TicTacHomeComponent,
  },
  {
    path: 'input',
    component: InputComponent,
  },
  {
    path: 'home/tic-tac-toe',
    component: GameBoardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
