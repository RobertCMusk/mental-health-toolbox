import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comfort',
  templateUrl: './comfort.component.html',
  styleUrls: ['./comfort.component.scss']
})
export class ComfortComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  public goBack():void {
    this.router.navigateByUrl('/action-picker');
  }
}
