import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicTacHomeService } from 'src/app/common/services/Home/home.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor(
    private router: Router,
    private ticTacHomeService: TicTacHomeService
  ) {}

  number = new FormGroup({
    number: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
  });
  ngOnInit() {}

  onSubmit(number: any) {
    this.ticTacHomeService.setNumber(number.value.number);
    if (number.value.number) {
      this.router.navigate(['/home/tic-tac-toe']);
    }
  }
}
