import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { State } from './model/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(
    private http : HttpClient
  ) { }

  states : State[] = [];

  private url = 'https://apimocha.com/proyectos-unidos/states'

  private httpHeader = new HttpHeaders({
    'Content-Type': 'application/javascript'
  })

  public getStates(){

   return this.http.get<State[]>(this.url, { headers : this.httpHeader })

  }

  public getNames(){

    return this.http.get<string[]>(`${this.url}-sort`, { headers : this.httpHeader });

  }
}
