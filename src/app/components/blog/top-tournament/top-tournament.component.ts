import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tournament } from 'src/app/interfaces/tournaments';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-top-tournament',
  templateUrl: './top-tournament.component.html',
  styleUrls: ['./top-tournament.component.scss']
})

export class TopTournamentComponent implements OnInit {

  topTournament: Tournament[] = [];
  id!: number;

  constructor(public blogService: BlogService, public router: Router) { }

  ngOnInit(): void {
    this.blogService.getTournaments()
    .subscribe((res: any) => this.topTournament = res["topTournament"]);
  }

  goToTournament(id: number){
    this.router.navigate([`tournament/${id}`]);
  }

}
