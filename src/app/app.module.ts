import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaysComponent } from './pays/pays.component';
import { ContinentComponent } from './continent/continent.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CountrydetailComponent } from './countrydetail/countrydetail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AmericasComponent } from './americas/americas.component';
import { AfricaComponent } from './africa/africa.component';
import { AsiaComponent } from './asia/asia.component';
import { EuropeComponent } from './europe/europe.component';
import { OceaniaComponent } from './oceania/oceania.component';


@NgModule({
  declarations: [
    AppComponent,
    PaysComponent,
    ContinentComponent,
    CountrydetailComponent,
    NotfoundComponent,
    AmericasComponent,
    AfricaComponent,
    AsiaComponent,
    EuropeComponent,
    OceaniaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
