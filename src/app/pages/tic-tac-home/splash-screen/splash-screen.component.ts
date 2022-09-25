import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SplashScreenComponent implements OnInit {
  windowWidth: string = '';
  showSplash: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.showSplashLoading();
  }

  showSplashLoading() {
    setTimeout(() => {
      this.windowWidth = '-' + window.innerWidth + 'px';
      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 500);
    }, 1500);
  }
}
