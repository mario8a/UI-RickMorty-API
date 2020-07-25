import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APIURL} from '../../environments/R&MAPI';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacters() {
    return this.http.get(APIURL.characters);
  }

  getCharacter(id) {
    return this.http.get(`${APIURL.characters}/${id}`);
  }
  searchCharacter(value = '',page = 1){
    return this.http.get(`${APIURL.characters}/?name=${value}`);
  }
}
