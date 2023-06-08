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
    detalle : '',
    name: '',
    img: '',
    ropa: []
  };

  ngOnInit(): void {

    this.routed.params.subscribe((params) => {
      this.getPlace(params['place'])
    })

  }

  open = false;

  toggle() { this.open = !this.open }

  private getPlace(place: string) {

    this.place = this.placeService.places.find((p) => p.name == place)!

  }

  close(e: Event) {
    e.stopPropagation()

    this.open = !this.open

  }

  prevent(event: Event) { event.stopPropagation() }

}
