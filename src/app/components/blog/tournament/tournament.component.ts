import { Component, Input, OnInit } from '@angular/core';
import { Tournament } from 'src/app/interfaces/tournaments';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  @Input('tournament') tournament!: Tournament;

  constructor() { }

  ngOnInit(): void {
  }

}
