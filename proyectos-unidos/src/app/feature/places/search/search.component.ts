import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private placeService : PlaceService
  ){

  }

  ngOnInit(): void { this.findPlacesNames() }

  places : string[] = [];
  filtered : string[] = [];

  findPlacesNames(){

    return this.placeService.findNames().subscribe({
      next : (res)=>{
        this.places = res;

      },
      error : (_)=>alert('Ha ocurrido un error')
    });
  }

  search(value : string){



    let lower = value.toLowerCase()

    this.filtered = this.places.filter(v=>v.toLowerCase().includes(lower))
  }

}
