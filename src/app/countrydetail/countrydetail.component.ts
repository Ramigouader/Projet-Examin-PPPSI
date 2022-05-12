import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COUNTRIES } from 'src/data/countries';

@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.css']
})
export class CountrydetailComponent implements OnInit {
  searchText;

  public countryName;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.countryName = this.route.snapshot.paramMap.get('name');  
  }
  public cntr=COUNTRIES;


}
