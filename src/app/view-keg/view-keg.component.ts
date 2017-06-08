import { Component, OnInit } from '@angular/core';

import { Keg } from './shared/keg.model'
import { KegService } from './shared/keg.service'

@Component({
  selector: 'app-view-keg',
  templateUrl: './view-keg.component.html',
  styleUrls: ['./view-keg.component.css'],
  providers: [ KegService ]
})

export class ViewKegComponent implements OnInit {
  kegs: Keg[] = [];

  constructor(private kegService: KegService) { }

  ngOnInit() {
    this.kegService.getKegs()
      .then(kegs => this.kegs = kegs);
  }
}
