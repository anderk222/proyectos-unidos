import { Component } from '@angular/core';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent {

  open = false;

  toggle(){ this.open = !this.open }

  close(e : Event){
    e.stopPropagation()

    this.open = !this.open

  }

  prevent(event : Event){ event.stopPropagation() }

}
