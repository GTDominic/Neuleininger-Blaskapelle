import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';
const config: Config = require('./path/to/config.json');

const baseUrl = config.ServerUrl + '/api/';

@Injectable({
  providedIn: 'root'
})
export class MusikerService {

  constructor(private http: HttpClient) {}

  getMusiker() {
    return this.http.get(`&{baseUrl}musiker/`);
  }

}
