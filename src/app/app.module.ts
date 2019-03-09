import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DocksComponent } from './docks/docks.component';
import { DrainageComponent } from './drainage/drainage.component';
import { BrandsComponent } from './brands/brands.component';
import { GroheComponent } from './grohe/grohe.component';
import { PedrolloComponent } from './pedrollo/pedrollo.component';
import { CotaliComponent } from './cotali/cotali.component';
import { AqgComponent } from './aqg/aqg.component';
import { ContactComponent } from './contact/contact.component';
import {HttpClientModule} from "@angular/common/http";
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    DocksComponent,
    DrainageComponent,
    BrandsComponent,
    GroheComponent,
    PedrolloComponent,
    CotaliComponent,
    AqgComponent,
    ContactComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    // <-- Right here

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
