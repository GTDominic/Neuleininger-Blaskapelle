import { Component, OnInit } from '@angular/core';

export interface GeschichteTabelle {
  year: string;
  month: string;
  event: string;
}
/*// tslint:disable-next-line:max-line-length
  {year: '' , month: '', event: ''},*/
const GESCHICHTE_DATA: GeschichteTabelle[] = [
  // tslint:disable-next-line:max-line-length
  {year: '1975', month: 'März', event: 'Von Ratsmitgliedern wird anlässlich einer Landtagswahl die Idee geboren, aus Mitteln des Waldverkaufs Instrumente für eine zu gründende Blaskapelle anzuschaffen. Diese Anregung entstand beim Betrachten von Bildern, auf denen schon vor dem Krieg Neuleininger Musiker den Stabaus begleiteten. Der damalige Bürgermeister Helmut Rüttger und die Ratsmitglieder Edgar Krämer und Herbert Kröner versprachen Hilfe oder aktive Unterstützung.'},
  // tslint:disable-next-line:max-line-length
  {year: '', month: 'Juli', event: 'Der Heimat- und Verkehrsverein unter Vorsitz von Johannes Baatsch wird vom Bürgermeister Rüttger mit der Trägerschaft beauftragt. Am 07.07.75 kommen so auf Veranlassung des HVV die ersten Interessenten im Bürgermeisteramt zusammen.'},
  // tslint:disable-next-line:max-line-length
  {year: '', month: 'August', event: 'Herr Baatsch hat einen Dirigenten gefunden:\nAugust Witz aus Bobenheim.\nAm 15.08.75 beschliesst der Gemeinderat, dass Instrumente gekauft werden. In den Folgemonaten, die Blaskapelle spielt schon, wirbelt dieser Beschluß politischen Staub auf. Kreisverwaltung und Verbandsgemeinde bestreiten der Gemeinde das Recht, bei defizitärer Haushaltslage eine Anschaffung dieser Art zu tätigen. Die Gemeinde nimmt für sich in Anspruch, aus dem Erlös des Waldverkaufs für Neuleiningen etwas Sinnvolles tun zu dürfen.'},
  // tslint:disable-next-line:max-line-length
  {year: '', month: 'September', event: 'Am 04.09.75 werden bei der Firma Alexander in Mainz die Instrumente bestellt. Anwesend sind Johannes Baatsch, August Witz, Josef Sattler, Edgar Krämer, Herbert Kröner und Herr Beggert von der Fa. Alexander.\nAm 16.09.75 werden die Instrumente geliefert.\nDer Rechnungsbetrag: 18.336.-- DM, incl. MwSt.\nFolgende Musiker (23) erhalten ein Instrument, nach Neigung oder auch nach Druck durch den Dirigenten August Witz:\n4 Trompeten: Franz Adam, Volker Ober, Thomas Sottung, Hans Spitz\n4 Flügelhorn: Edgar Krämer, Petra Schulz, Erhard Sottung, Andrea Spitz\n4 Tenorhorn: Thomas Eitelmann, Volker Kottke, Christian Krämer, Ewald Ober\n1 Bariton: Herbert Kröner\n2 Es-Horn: Karla Bickert, Gabi Kluge\n1 Klarinette: Hans Adam\n3 Posaune: Waldemar Adam, Hans Blanz, Günter Moses\n1 B-Tuba: Hubert Neumann\n1 Große Trommel: Erhard Bohn\n1 Kl. Trommel: Klaus Geyer\n2 Becken: Dieter Ober'},
  // tslint:disable-next-line:max-line-length
  {year: '', month: 'Oktober', event: 'Für „Nachzügler" beschliesst der Gemeinderat, weitere Instrumente anzuschaffen zum Gesamtpreis von 6.184.-- DM. Die Instrumente werden am 14.11.75 geliefert.\n4 Klarinetten: Claudia Adam, Ursula Schaller, Elisabeth Seibel, Martina Sottung\n3 Trompeten: Thomas Lorenz, Thomas Nahstoll, Harald Ober\n1 Tenorhorn: Uwe Schaller\n2 Es-Horn: Petra Adam, Christine Neumann'},
  // tslint:disable-next-line:max-line-length
  {year: '', month: 'Dezember', event: 'Erster Auftritt in der Öffentlichkeit mit einigen Weihnachtsliedern. Im „Burggraf" wird die erste Weihnachtsfeier der Musiker veranstaltet.'},
  // tslint:disable-next-line:max-line-length
  {year: '1976' , month: 'März', event: 'Die Kapelle wirkt erstmals beim Stabaus mit, neben der Kolpingskapelle Ramsen. Alle 14 Tage freitags ist theoretischer Unterricht.'},
  // tslint:disable-next-line:max-line-length
  {year: '' , month: 'Juni', event: 'Fronleichnamsprozession im Dorf.'},
  // tslint:disable-next-line:max-line-length
  {year: '' , month: 'Juli', event: 'Brunneneinweihung an der Linde.'},
  // tslint:disable-next-line:max-line-length
  {year: '' , month: 'August', event: 'Musikfest in Bobenheim und Geburtstagsständchen bei Ehrenbürger Anton Rixner.'},
  // tslint:disable-next-line:max-line-length
  {year: '' , month: 'September', event: 'Seniorennachmittag, Kerweumzüge in Kleinkarlbach und Neuleiningen.'},
  // tslint:disable-next-line:max-line-length
  {year: '' , month: 'Dezember', event: 'Anläßlich der Weihnachtsfeier, die in Bobenheim stattfand, erhalten die Musiker Westen. Herr Kühn half durch eine Spende. Noch 1975 traten Paul Schaller und Harald Seithel der Kapelle bei, 1976 Werner Kottke und Hans-Georg Seithel. '},
  // tslint:disable-next-line:max-line-length
  {year: '1978' , month: '', event: 'Die Blaskapelle wird Mitglied im Landesmusikverband.\n1. Neuleininger Musikfest im Burghof. Unsere Gäste kommen aus Schießen.\nErstmals treten wir im Ebertpark auf. Zur Kerwe kommen Gäste aus Warthausen,\nWaldfest in Ramsen und Jockgrimm, Musikfeste in Sandhofen und Büchig.\nInsgesamt bestreiten wir 35 Auftritte. Wir haben 43 aktive Mitglieder, 17 von ihnen\nhaben ein eigenes Instrument - nur 16 Aktive sind älter als 18 Jahre.'},
  // tslint:disable-next-line:max-line-length
  {year: '1979' , month: '', event: 'Die Blaskapelle veranstaltet das 1. Dorffest.'},
  // tslint:disable-next-line:max-line-length
  {year: '1980' , month: '', event: 'Abschiedskonzert für unseren 1. Dirigenten August Witz. Sein Sohn Rüdiger übernimmt die Stabsführung. Der 2. Anfängerkurs durch Frl. Mayer, Esthal, beginnt. Teilnehmer: Rainer Eitelmann, Wolfgang Grünert, Axel Kröner, Antje Mahling und Alice Spitz.'},
  // tslint:disable-next-line:max-line-length
  {year: '1981' , month: '', event: 'Mit der Kreisverwaltung fahren wir durch Vermittlung von Bürgermeister Freyland für 4 Tage nach Südtirol. Nach monatelangem Arbeiten weihen wir unseren Aufenthaltsraum im ehemaligen Gemeinschaftsbad der Schule ein. Anschliessend wird der Übungsraum renoviert. Mit grosser Mehrheit wird Roland Hahn, Mutterstadt, zu unserem 3. Dirigenten gewählt.'},
  // tslint:disable-next-line:max-line-length
  {year: '1982' , month: '', event: 'Der 3. Anfängerkurs hat nur 2 Interessierte: Diana Adam und Kerstin Dilg. Ausflug nach Metzingen.'},
  // tslint:disable-next-line:max-line-length
  {year: '1983' , month: '', event: 'Seminar in der Jugendherberge Steinbach. Herr Hahn bemüht sich 2 Tage, uns Grundsätzliches über die Musik beizubringen. Wochenendausflug nach Bermatingen. Zur Kerwe haben wir einen neuen Dirigenten: Arthur Stahl aus Ludwigshafen, Berufsmusiker der Pfälzischen Philharmonie.'},
  // tslint:disable-next-line:max-line-length
  {year: '1984' , month: '', event: 'Nach einer umfangreichen Werbeaktion für neue Anfängerkurse übernimmt Frau Jerges, geborene Mayer aus Esthal, 3 Anfänger für Trompeten: Sven Holzbach, Höningen; Monika Beck und Ulrike Beck. Einen Trommelkurs führt Arno Leist aus Bobenheim mit Rainer Eitelmann und Stefan Michel aus Kleinkarlbach. Ein Klarinettenkurs mit 3 Anfängern scheitert nach einigen Wochen.Zur Kerwe haben wir Gäste aus Holland, die Hierder Burgkapelle.'},
  // tslint:disable-next-line:max-line-length
  {year: '1985' , month: '', event: 'Herr Dimitri Ungureanu übernimmt die Anfängerkurse 3 und 4 von Frau Jerges. Die Musiker werden mit Jacken ausgestattet. Die 9.000.-- DM werden aus Spendengeldern aufgebracht. Erster Auftritt im Herzogenried- und Luisenpark in Mannheim (Seebühne), zusammen mit der Volkstanzgruppe Ramsen. Herbert Kröner legt sein Amt als Obmann der Neuleininger Blaskapelle nieder. Erhard Sottung übernimmt das Amt des Obmanns der Neuleininger Blaskapelle.'},
  // tslint:disable-next-line:max-line-length
  {year: '1986' , month: '', event: 'Konzert der Neuleininger Blaskapelle mit dem Männerchor Kirchheim /Wstr. in der Stadthalle Grünstadt.'},
  // tslint:disable-next-line:max-line-length
  {year: '1987' , month: '', event: 'Jürgen Sottung ein Musiker der Neuleininger Blaskapelle legt die Prüfung als Dirigent im Blasorchester ab.'},
  // tslint:disable-next-line:max-line-length
  {year: '1988' , month: '', event: 'Herbstkonzert der 3 Blaskapellen der Verbandsgemeinde Grünstadt-Land in Obrigheim. Dank vieler Spenden konnten 4 Saxophone angeschafft werden.'},
  // tslint:disable-next-line:max-line-length
  {year: '1989' , month: '', event: 'Ab 1989 feiert die Neuleininger Blaskapelle ihren Vaddertag an der Alten Schule.'},
  // tslint:disable-next-line:max-line-length
  {year: '1990' , month: '', event: 'Die Neuleininger Blaskapelle sucht einen Dirigenten. Herr Stahl legte im Oktober 1989 die Leitung der Blaskapelle nieder. Jürgen Sottung wird als Dirigent der Neuleininger Blaskapelle gewählt. Die Neuleininger Blaskapelle feiert ihr 15 jähriges bestehen mit einem Musikfest. Herr Stahl wird am Musikfest als Dirigent verabschiedet.'},
  // tslint:disable-next-line:max-line-length
  {year: '1991' , month: '', event: 'Die Neuleininger Blaskapelle wird zum eigenständigen Verein als Neuleininger Blaskapelle e.V.'},
  // tslint:disable-next-line:max-line-length
  {year: '1992' , month: '', event: 'Das 10. Verbandsgemeindekonzert fand in der neuen Schulturnhalle in Kleinkarlbach statt. Veranstaltet wurde das Konzert durch die 3 Blaskapellen der Verbandsgemeinde. Bei der Mitgliederversammlung der Neuleininger Blaskapelle e.V., beschlossen die Mitglieder, dass sich der Verein eine Fahne kauft. Die Neuleininger Blaskapelle e.V. richtet anlässlich der 750 Jahrfeier Neuleiningens, den Tag der Blasmusik des Kreismusikverbandes Bad Dürkheim - Neustadt aus. Im Herbst veranstaltet die Neuleininger Blaskapelle e.V. ihr erstes Herbstkonzert.'},
  // tslint:disable-next-line:max-line-length
  {year: '1993' , month: '', event: 'Die Vereinsfahne wird bestellt und die Kosten konnte durch Spenden gedeckt werden. Allen Spendern sei an dieser Stelle nochmals recht herzlich Danke gesagt. Der Verein veranstaltete einen 5 Tagesausflug nach Töll in Südtirol. Die Neuleininger Blaskapelle e.V. schließt sich der Pfälzischen Musikschule an und wird Mitglied.'},
  // tslint:disable-next-line:max-line-length
  {year: '1994' , month: '', event: 'Die Blaskapelle veranstaltet ihren ersten Kappenabend. Es beginnen neue Anfängerkurse für Trompete, Klarinette und Querflöte. An diesen Kursen fangen 11 Jungmusiker an.'},
  // tslint:disable-next-line:max-line-length
  {year: '1995' , month: '', event: 'Die Blaskapelle feiert ihr 20-jähriges Jubiläum mit einem Musikfest, im Rahmen eines Gottesdienstes wird die neue Vereinsfahne geweiht. Unser bisheriger Dirigent Jürgen Sottung wird verabschiedet und sein Nachfolger Mike Neuner offiziell vorgestellt, durch den Kreisverband werden mehrere Musikerinnen und Musiker für langjähriges aktives musizieren geehrt. Als Gäste spielen am Samstag die Mooswälder Musikanten, Sonntags spielen befreundete Vereine im Festzelt.'},
  // tslint:disable-next-line:max-line-length
  {year: '1996' , month: '', event: 'Das schon traditionelle „Herbstkonzert" der Blaskapelle findet zum ersten mal als „Neujahrskonzert" im Januar statt und ist gleichzeitig die „Premiere" für unseren neuen Dirigenten Mike Neuner. Durch einen Schwelbrand in der Alten Schule in Neuleiningen und die erforderlichen Renovierungsmaßnahmen sind die Musiker gezwungen sich übergangsweise ein anderes Probelokal zu suchen, sie werden herzlich bei den Musikerkameraden in Bobenheim / Berg aufgenommen. Dank erfolgreicher Jugendarbeit können 10 Jungmusikerinnen und -musiker in die Kapelle integriert werden.'},
  // tslint:disable-next-line:max-line-length
  {year: '1997' , month: '', event: 'Trotz witterungsbedingter Hindernisse (Eis, Schnee, Nebel) finden zahlreiche Besucher den Weg ins TSV-Heim zum Konzert der Blaskapelle, das unterstützt wird durch ein Schlagzeugensemble aus Frankenthal. Im Sommer wird mit Zustimmung der Ortsgemeinde der Übungsraum umgebaut. Neben einem mehrtägigen Ausflug nach Röhrnbach im Bay. Wald steht im Herbst auch ein „Minikonzert" der Nachwuchsmusiker auf dem Programm.'},
  // tslint:disable-next-line:max-line-length
  {year: '1998' , month: '', event: 'Neben zahlreichen Veranstaltungen im Jahr bildet das Jahreskonzert den Höhepunkt, zum ersten mal, wagt sich die Blaskapelle allein in die grosse Schulturnhalle in Kleinkarlbach, ein voller Erfolg. Weit mehr als 250 Gäste besuchen das Konzert. Im Sommer werden drei neue Klarinetten, teilweise durch Spenden finanziert, gekauft. Ein Wandertag mit Grillfest nach Großkarlbach sorgt für geselliges Beisammensein. Erste Gedanken an eine neue Uniform ziehen ihre Kreise.'},
  // tslint:disable-next-line:max-line-length
  {year: '1999' , month: '', event: 'Das Jubiläum im nächsten Jahr wirft seine Schatten voraus, nachdem wir die Zusage zur Ausrichtung des Tages der Blasmusik erhalten haben beginnen die Planungen für das Jubiläumsjahr. Die Blaskapelle feiert zum 10. mal den Vaddertag.Im Sommer findet das erste gemeinsame Jugendzeltlager der Neuleininger Blaskapelle und des Bergmannsblasorchesters Hettenleidelheim statt. Ein neues Schlagzeug wird gekauft und die Idee der neuen Uniform wird konkretisiert, erste Angebote und Muster werden eingeholt. Im Frühjahr startet auf Initiative der Blaskapelle ein Blockflötenkurs. Beim Nachwuchskonzert im Herbst spielt ein gemeinsames Jugendensemble aus Neuleiningen und Hettenleidelheim, die Zuhörer füllen den Saal der Alten Schule.'},
  // tslint:disable-next-line:max-line-length
  {year: '2000' , month: '', event: '25-jähriges Jubiläum der Blaskapelle.'},
  // tslint:disable-next-line:max-line-length
  {year: '' , month: 'Januar', event: 'Die neue Uniform wird bestellt, ein nicht unerheblicher Teil der Kosten kann über Spenden finanziert werden.'},
  // tslint:disable-next-line:max-line-length
  {year: '' , month: 'Februar', event: 'Internetanschluss der Blaskapelle mit eigener Domain und E-Mail-Adresse, unter www.neuleininger-blaskapelle.de sind wir online zu erreichen.'},
  // tslint:disable-next-line:max-line-length
  {year: '' , month: 'März', event: 'Die Vorbereitungsproben für das „Millenniumskonzert" finden ihren Abschluss in einem dreitägigen Aufenthalt in Kürnbach im Schwarzwald.'},
  // tslint:disable-next-line:max-line-length
  {year: '' , month: 'August', event: 'Das Jubiläum wurde mit dem Tag der Blasmusik gefeiert. Zu den Höhepunkten zählten auch das Konzert des Polizeiorchester Rheinland Pfalz.'},
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
