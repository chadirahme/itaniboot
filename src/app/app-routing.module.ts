import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DocksComponent} from "./docks/docks.component";
import {DrainageComponent} from "./drainage/drainage.component";
import {BrandsComponent} from "./brands/brands.component";
import {GroheComponent} from "./grohe/grohe.component";
import {PedrolloComponent} from "./pedrollo/pedrollo.component";
import {CotaliComponent} from "./cotali/cotali.component";
import {AqgComponent} from "./aqg/aqg.component";
import {ContactComponent} from "./contact/contact.component";
import {CategoryComponent} from "./category/category.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'drainage', component: DrainageComponent },
  { path: 'docks', component: DocksComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'grohe/:name', component: GroheComponent },
  { path: 'pedrollo', component: PedrolloComponent },
  { path: 'cotali', component: CotaliComponent },
  { path: 'aqg', component: AqgComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'category', component: CategoryComponent },
  { path: '*', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
