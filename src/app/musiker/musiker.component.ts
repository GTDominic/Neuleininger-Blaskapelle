import { Component, OnInit } from '@angular/core';
import { MusikerService } from '../services/musiker.service';

@Component({
  selector: 'app-musiker',
  templateUrl: './musiker.component.html',
  styleUrls: ['./musiker.component.css']
})
export class MusikerComponent implements OnInit {

  musiker: any;
  instrument: any;

  constructor(private musikerService: MusikerService) { }

  ngOnInit() {
    this.getMusiker();
    this.getInstrument();
  }

  getMusiker() {
    this.musikerService.getMusiker()
      .subscribe(
        data => {
          this.musiker = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getInstrument() {
    this.musikerService.getInstrument()
      .subscribe(
        data => {
          this.instrument = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
