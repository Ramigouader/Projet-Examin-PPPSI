import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from 'src/data/countries';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-americas',
  templateUrl: './americas.component.html',
  styleUrls: ['./americas.component.css']
})
export class AmericasComponent implements OnInit {
  searchText;

  public continent;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.continent = this.route.snapshot.paramMap.get('continent');  
  }

  
  public cntr=COUNTRIES;

}
