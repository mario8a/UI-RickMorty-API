import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APIURL} from '../../environments/R&MAPI';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocations() {
    return this.http.get(APIURL.locations);
  }

}
