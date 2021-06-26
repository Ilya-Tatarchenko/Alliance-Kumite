import { Component, Input, OnInit } from '@angular/core';
import { Tournament } from 'src/app/interfaces/tournaments';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-top-tournament',
  templateUrl: './top-tournament.component.html',
  styleUrls: ['./top-tournament.component.scss']
})
export class TopTournamentComponent implements OnInit {

  topTournament: Tournament[] = [];

  constructor(public blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getTournaments()
    .subscribe((res: any) => this.topTournament = res["topTournament"]);
  }

}
