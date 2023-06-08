import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  constructor(
    public placeService: PlaceService,
    private routed: ActivatedRoute
  ) { }

  loading = false;
  param = ''

  ngOnInit(): void {

    this.placeService.places = []

    this.routed.params.subscribe((params) => {

      this.param = params['state']

      this.getPlaces(params['state'])

    })

  }

  private getPlaces(state: string) {

    this.loading = true

    this.placeService.getPlaces(state).subscribe(
      {
        next: (res) => {
          this.placeService.places = res
          this.loading = false;
        },
        error: (_) => {
          alert('Ha ocurrido un error')
          this.loading = false;
        }
      })
  }


}
