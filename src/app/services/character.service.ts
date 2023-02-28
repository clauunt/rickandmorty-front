import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  _url = 'https://rickandmortyapi.com/api/character';
    
  constructor(
    private http: HttpClient
  ) { 
  }

  getAllCharacters(){
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    return this.http.get(this._url, {headers: header});
  }

  getCharacterByID(id: number){
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    return this.http.get(`${this._url}/${id}`, {headers: header});
  }

}
