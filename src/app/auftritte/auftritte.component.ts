import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { AuftritteService } from '../services/auftritte.service';

@Component({
  selector: 'app-auftritte',
  templateUrl: './auftritte.component.html',
  styleUrls: ['./auftritte.component.css']
})
export class AuftritteComponent implements OnInit {

  actauftritte: any;

  // @ViewChild(MatTable) table: MatTable<any>;

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
          // this.table.renderRows();
        },
        error => {
          console.log(error);
        });
  }
}
