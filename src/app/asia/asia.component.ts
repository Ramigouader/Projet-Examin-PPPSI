import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from 'src/data/countries';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent implements OnInit {

  public pays;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pays = this.route.snapshot.paramMap.get('pays');  
  }

  
  public cntr=COUNTRIES;

}
