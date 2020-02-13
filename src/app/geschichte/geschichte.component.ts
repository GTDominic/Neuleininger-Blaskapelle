import { Component, OnInit } from '@angular/core';

export interface GeschichteTabelle {
  year: string;
  month: string;
  event: string;
}

// {year:'' , month: '', event: ''},
const GESCHICHTE_DATA: GeschichteTabelle[] = [
  {year: '1975', month: 'März', event: `Von Ratsmitgliedern wird anlässlich einer Landtagswahl
     die Idee geboren, aus Mitteln des Waldverkaufs Instrumente für eine zu gründende
     Blaskapelle anzuschaffen. Diese Anregung entstand beim Betrachten von Bildern,
     auf denen schon vor dem Krieg Neuleininger Musiker den Stabaus begleiteten. Der
     damalige Bürgermeister Helmut Rüttger und die Ratsmitglieder Edgar Krämer und
     Herbert Kröner versprachen Hilfe oder aktive Unterstützung.`},
];

@Component({
  selector: 'app-geschichte',
  templateUrl: './geschichte.component.html',
  styleUrls: ['./geschichte.component.css']
})
export class GeschichteComponent implements OnInit {

  displayedGColumns: string[] = ['year', 'month', 'event'];
  geschichteSource = GESCHICHTE_DATA;

  constructor() { }

  ngOnInit() {
  }

}
