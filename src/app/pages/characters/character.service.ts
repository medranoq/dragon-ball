import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Api} from "../../enums/Api";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private _http: HttpClient) {
  }

  getCharacters(): Observable<any> {
    return this._http.get<any>(`${Api.baseURL}/characters?limit=100`);
  }

  getCharacterById(id: string): Observable<any> {
    return this._http.get<any>(`${Api.baseURL}/characters/${id}`);
  }
}
