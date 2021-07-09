import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tournament } from 'src/app/interfaces/tournaments';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  @Input('tournament') tournament!: Tournament;
  id!: number;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goToTournament(id: number){
    this.router.navigate([`tournament/${id}`]);
  }

}
