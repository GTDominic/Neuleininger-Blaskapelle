import { Component, OnInit } from '@angular/core';
import { MusikerService } from '../services/musiker.service';

@Component({
  selector: 'app-vorstand',
  templateUrl: './vorstand.component.html',
  styleUrls: ['./vorstand.component.css']
})
export class VorstandComponent implements OnInit {

  musikers: any;

  constructor(private musikerService: MusikerService) { }

  ngOnInit() {
    this.getMusiker();
  }

  getMusiker() {
    this.musikerService.getMusiker()
      .subscribe(
        data => {
          this.musikers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
