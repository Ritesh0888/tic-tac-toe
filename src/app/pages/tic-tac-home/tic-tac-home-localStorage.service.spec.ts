/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TicTacHomeLocalStorageService } from './tic-tac-home-localStorage.service';

describe('Service: TicTacHomeLocalStorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicTacHomeLocalStorageService]
    });
  });

  it('should ...', inject([TicTacHomeLocalStorageService], (service: TicTacHomeLocalStorageService) => {
    expect(service).toBeTruthy();
  }));
});
