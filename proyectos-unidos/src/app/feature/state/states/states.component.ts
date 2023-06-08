import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit, OnDestroy {

  constructor(

    public stateService : StateService
  ){ }

  public loading = false;

  ngOnInit(): void { this.getStates() }
  ngOnDestroy(): void {this.stateService.states = []}

  private getStates(){

    this.loading = true

    this.stateService.getStates().subscribe({
      next : ( res )=>{
        this.stateService.states = res;
        this.loading = false
      },
      error : (_)=>{
        this.loading = false
        alert('Ha ocurrido un error')
    }
    })

  }

}
