import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-silliness',
  templateUrl: './silliness.component.html',
  styleUrls: ['./silliness.component.scss']
})
export class SillinessComponent implements OnInit {
  

  constructor(
    private http: HttpClient,
    private router: Router,
    ) { }

  public cats:any = [];

  ngOnInit(): void {
    this.getCats();
  }

  public goBack() {
    this.router.navigateByUrl('/action-picker')
  }
  public getCats() {
    this.http.get('https://api.thecatapi.com/v1/images/search?limit=99').subscribe(data => {
      console.log(data);
      (data as [any]).forEach(cat => {
        this.cats.push(cat)
      })
   
    })
  }

  public moreCatsPlease() {
    this.getCats();
  }

}
