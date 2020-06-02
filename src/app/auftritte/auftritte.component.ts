import { Component, OnInit } from '@angular/core';
import { AuftritteService } from '../services/auftritte.service';

@Component({
  selector: 'app-auftritte',
  templateUrl: './auftritte.component.html',
  styleUrls: ['./auftritte.component.css']
})
export class AuftritteComponent implements OnInit {

  actauftritte: any;
  displayedColumns = ['location', 'event'];

  constructor(private auftritteService: AuftritteService) { }

  ngOnInit() {
    this.getAuftritte();
  }

  getAuftritte() {
    this.auftritteService.getAuftritte()
      .subscribe(
        data => {
          this.actauftritte = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
