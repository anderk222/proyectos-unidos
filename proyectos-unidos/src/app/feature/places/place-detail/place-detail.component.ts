import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../model/place';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  constructor(
    private placeService: PlaceService,
    private routed: ActivatedRoute
  ) { }

  place: Place = {
    capital: '',
    clima: '',
    detalle: '',
    name: '',
    img: '',
    ropa: []
  };


  state: 'load' | 'error' | 'ok' = 'ok';
  ropa = '';

  ngOnInit(): void {

    this.routed.params.subscribe((params) => {
      this.getPlace(params['place'])
    })

  }

  open = false;

  openImage(img : string) { 
    
    this.open = !this.open 
    this.ropa = img;
  }

  private getPlace(place: string) {

    let search = this.placeService.places.find((p) => p.name == place);

    if (!search) {

      this.state = 'load';
      this.placeService.getAll().subscribe({
        next: () => {

          search = this.placeService.places.find((p) => p.name == place);
          this.place = search ? (() => {

            this.state = 'ok'
            return search;
          })() : (() => {
            this.state = 'error'
            return this.place;
          })()

        },
        error: () => {
          /* alert('A error has been happended') */
          this.state = 'error';

        }
      })

    }

    this.place = search ? (() => {

      this.state = 'ok'
      return search;
    })() : (() => {
      this.state = 'error'
      return this.place;
    })()
    console.log(this.state);
    

  }

  close(e: Event) {
    e.stopPropagation()

    this.open = !this.open

  }

  prevent(event: Event) { event.stopPropagation() }

}
