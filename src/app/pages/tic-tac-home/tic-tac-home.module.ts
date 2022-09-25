import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TicTacCommonModule } from 'src/app/common/common.module';
import { TicTacHomeComponent } from './tic-tac-home.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { GameBoardComponent } from '../game-board/game-board.component';
import { MatIconModule } from '@angular/material/icon';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [TicTacHomeComponent, InputComponent,GameBoardComponent,  SplashScreenComponent],
  imports: [
    CommonModule,
    TicTacCommonModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [TicTacHomeComponent, SplashScreenComponent, GameBoardComponent],
})
export class TicTacHomeModule {}
