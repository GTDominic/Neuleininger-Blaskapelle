import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const config = require('../config.json');

const baseUrl = config.ServerUrl + '/api/';

@Injectable({
  providedIn: 'root'
})
export class MusikerService {

  constructor(private http: HttpClient) {}

  getAuftritte() {
    return this.http.get(baseUrl + 'auftritte');
  }

}
