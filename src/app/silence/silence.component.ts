import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-silence',
  templateUrl: './silence.component.html',
  styleUrls: ['./silence.component.scss'],
  animations: [
    trigger('inhaleExhaleText', [
      state('inhale', style({
        fontSize: '100px',
        color: '#98B1C4',
        borderColor: '#98B1C4'
      })),
      state('exhale', style({
        fontSize: '12px',
        color: '#4D387C',
        borderColor: '#4D387C'
      })),
      transition('inhale => exhale', [
        animate('10s')
      ]),
      transition('exhale => inhale', [
        animate('10s')
      ]),
    ]),
  ]
})
export class SilenceComponent implements OnInit {

  public textSubject = new Subject<string>();
  public textObservable = this.textSubject.asObservable();

  public inhaleTimer = 10000;

  public isInhaling = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isInhaling = !this.isInhaling
      this.toggleInhale();
    }, 0);

  }

  public toggleInhale = () => {
    setTimeout(() => {
      this.isInhaling = !this.isInhaling;
      this.toggleInhale();
    }, this.inhaleTimer);
  };

}
