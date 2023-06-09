import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../feature/state/state.service';

@Component({
  selector: 'app-slide-states',
  templateUrl: './slide-states.component.html',
  styleUrls: ['./slide-states.component.css']
})
export class SlideStatesComponent implements OnInit {

  constructor(
    private stateService: StateService
  ) { }

  states: string[] = []

  ngOnInit(): void { this.getNames() }

  getNames() {

    this.stateService.getNames().subscribe({
      next: (res) => {
        this.states = res;
      },
      error: () => {
        alert("A error has been happened")
      }
    })

  }


}
