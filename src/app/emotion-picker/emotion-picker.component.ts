import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emotion-picker',
  templateUrl: './emotion-picker.component.html', 
  styleUrls: ['./emotion-picker.component.scss']
})
export class EmotionPickerComponent implements OnInit {


  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  public gotoNextPage():void {
    this.router.navigateByUrl('/action-picker');
  }

}
