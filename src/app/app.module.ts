import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MoviesComponent } from './views/movies/movies.component';
import { DetailsComponent } from './views/details/details.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, MoviesComponent, DetailsComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
