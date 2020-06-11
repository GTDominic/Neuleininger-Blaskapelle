import { Component, OnInit } from '@angular/core';
import { AuftritteService } from '../services/auftritte.service';

export interface AuftritteInterface {
  ort: string;
  event: string;
  date: string;
  start: string;
  end: string;
}

@Component({
  selector: 'app-auftritte',
  templateUrl: './auftritte.component.html',
  styleUrls: ['./auftritte.component.css']
})

export class AuftritteComponent implements OnInit {

  dbauftritte: any;
  actauftritte: AuftritteInterface[] = [];

  displayedColumns = ['location', 'event', 'start'];

  constructor(private auftritteService: AuftritteService) { }

  ngOnInit() {
    this.getAuftritte();
  }

  getAuftritte() {
    this.auftritteService.getAuftritte()
      .subscribe(
        data => {
          this.dbauftritte = data;
          console.log(this.dbauftritte);
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < this.dbauftritte.length; i++) {
            this.actauftritte.push({
              ort: this.dbauftritte[i].location,
              event: this.dbauftritte[i].name,
              date: '3',
              start: '4',
              end: '5'
            });
          }
        },
        error => {
          console.log(error);
        });
  }
}
