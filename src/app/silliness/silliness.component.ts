import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-silliness',
  templateUrl: './silliness.component.html',
  styleUrls: ['./silliness.component.scss']
})
export class SillinessComponent implements OnInit {
  

  constructor(private http: HttpClient) { }

  public cats:any = [];

  ngOnInit(): void {
    this.getCats();
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
