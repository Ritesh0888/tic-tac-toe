import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TicTacCommonModule } from 'src/app/common/common.module';
import { TicTacHomeComponent } from './tic-tac-home.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { MatIconModule } from '@angular/material/icon';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
@NgModule({
  declarations: [TicTacHomeComponent, InputComponent, SplashScreenComponent],
  imports: [
    BrowserModule,
    TicTacCommonModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [TicTacHomeComponent, SplashScreenComponent],
})
export class TicTacHomeModule {}
