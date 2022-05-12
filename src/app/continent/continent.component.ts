import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.css']
})
export class ContinentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];


}
