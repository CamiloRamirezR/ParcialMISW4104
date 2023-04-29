import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PlantaModule} from "./planta/planta.module";
import { PlantaListComponent } from './planta/planta-list/planta-list.component';

@NgModule({
  declarations: [
    AppComponent, PlantaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlantaModule,
    HttpClientModule
  ],
  exports: [PlantaListComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
