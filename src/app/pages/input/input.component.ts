import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor(private router: Router) {}

  number = new FormGroup({
    number: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
  });
  ngOnInit() {}

  onSubmit(number: any) {
    if (number.value.number) {
      this.router.navigate(['/home/tic-tac-toe']);
    }
  }
}
