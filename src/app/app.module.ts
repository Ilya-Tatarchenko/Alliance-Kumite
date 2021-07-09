import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { SliderComponent } from './components/slider/slider.component';
import { BlogComponent } from './components/blog/blog.component';
import { TournamentComponent } from './components/blog/tournament/tournament.component';
import { HttpClientModule } from '@angular/common/http';
import { TopTournamentComponent } from './components/blog/top-tournament/top-tournament.component';
import { TournamentByIdComponent } from './components/blog/tournament-by-id/tournament-by-id.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    SliderComponent,
    BlogComponent,
    TournamentComponent,
    TopTournamentComponent,
    TournamentByIdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
