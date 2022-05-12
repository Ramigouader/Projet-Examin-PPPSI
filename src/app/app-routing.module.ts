import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaysComponent } from './pays/pays.component';
import { ContinentComponent } from './continent/continent.component';
import { CountrydetailComponent } from './countrydetail/countrydetail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AmericasComponent } from './americas/americas.component'; 
const routes: Routes = [ { path: 'pays', component: PaysComponent },{ path: 'paysdecontinant/:continent', component: AmericasComponent },{ path: 'continent', component: ContinentComponent },{ path: 'pays/:name', component: CountrydetailComponent },{path: "**", component : NotfoundComponent}  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
