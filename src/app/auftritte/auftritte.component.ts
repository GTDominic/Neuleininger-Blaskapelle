import { Component, OnInit } from '@angular/core';
import { AuftritteService } from '../services/auftritte.service';

export interface AuftritteInterface {
  ort?: String;
  event?: String;
  date?: String;
  start?: String;
  end?: String;
}

@Component({
  selector: 'app-auftritte',
  templateUrl: './auftritte.component.html',
  styleUrls: ['./auftritte.component.css']
})

export class AuftritteComponent implements OnInit {

  dbauftritte: any;
  actauftritte = {} as Array<AuftritteInterface>;
  
  displayedColumns = ['location', 'event','start'];

  constructor(private auftritteService: AuftritteService) { }

  ngOnInit() {
    this.getAuftritte();
  }

  getAuftritte() {
    this.auftritteService.getAuftritte()
      .subscribe(
        data => {
          this.dbauftritte = data;
          console.log(data);
          this.actauftritte.length = this.dbauftritte.length;
          
          // for(let i = 0; i < this.dbauftritte.length; i++){
          //   this.actauftritte[i].ort = this.dbauftritte[i].location;
          //   console.log(this.actauftritte);
          // }
        },
        error => {
          console.log(error);
        });    
  }
}
