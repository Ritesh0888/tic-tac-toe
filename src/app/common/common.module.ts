import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { SplashScreenComponent } from './UI/splash-screen/splash-screen.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [ButtonComponent, SplashScreenComponent],
  exports: [ButtonComponent, SplashScreenComponent],
})
export class TicTacCommonModule {}
