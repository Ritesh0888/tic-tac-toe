/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TicTacHomeService } from './tic-tac-home.service';

describe('Service: TicTacHome', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicTacHomeService]
    });
  });

  it('should ...', inject([TicTacHomeService], (service: TicTacHomeService) => {
    expect(service).toBeTruthy();
  }));
});
