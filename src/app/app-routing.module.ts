import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { TournamentComponent } from './components/blog/tournament/tournament.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'blog', component: BlogComponent},
  { path: 'tournament/:id', component: TournamentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
