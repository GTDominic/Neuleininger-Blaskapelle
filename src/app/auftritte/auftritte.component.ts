import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
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
  showtable: boolean = false;

  displayedColumns = ['ort', 'event','date', 'start', 'end'];

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
            // convert utc time to unix
            let tempstartdb = Date.parse(this.dbauftritte[i].start);
            let tempenddb = Date.parse(this.dbauftritte[i].end);

            // convert unix dates into user dates
            let tempdate = formatDate(tempstartdb, 'd.M.y', 'en-US');
            let tempstart = formatDate(tempstartdb, 'HH:mm', 'en-US');
            let tempend = formatDate(tempenddb, 'HH:mm', 'en-US');

            // put dates into table array
            this.actauftritte.push({
              ort: this.dbauftritte[i].location,
              event: this.dbauftritte[i].name,
              date: tempdate,
              start: tempstart,
              end: tempend
            });
          }
          this.showtable = true;
        },
        error => {
          console.log(error);
        });
  }
}
