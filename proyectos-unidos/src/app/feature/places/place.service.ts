import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Place } from './model/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(

    private http : HttpClient

  ) { }

  places : Place[] = [];

  private url = 'https://apimocha.com/proyectos-unidos/places'

  private httpHeader = new HttpHeaders({
    'Content-Type': 'application/javascript'
  })

  public getPlaces(state : string){

    return this.http.get<Place[]>(`${this.url}/${state}/state`, { headers : this.httpHeader })

  }

  public findNames(){

    return this.http
  .get<string[]>(`${this.url}/names`, {  headers : this.httpHeader});

  }

  public getAll(){

    return this.http.get<Place[]>(`${this.url}/all`, { headers : this.httpHeader });

  }
}