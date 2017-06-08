import { Injectable } from '@angular/core';

import { KEGS } from './mock-kegs'

@Injectable()
export class KegService {
  getKegs() {
    return Promise.resolve(KEGS);
  }
}
