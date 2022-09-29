import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-picker',
  templateUrl: './action-picker.component.html',
  styleUrls: ['./action-picker.component.scss']
})
export class ActionPickerComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  public goToSillines(): void {
    this.router.navigateByUrl('/silliness')
  }
  public gotoSilence(): void {
    this.router.navigateByUrl('/silence');
  }
  public gotoComfort(): void {
    this.router.navigateByUrl('/comfort');
  }

}
