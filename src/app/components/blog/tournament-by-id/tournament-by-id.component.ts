import { Component, Input, OnInit } from '@angular/core';
import { Tournament } from 'src/app/interfaces/tournaments';

@Component({
  selector: 'app-tournament-by-id',
  templateUrl: './tournament-by-id.component.html',
  styleUrls: ['./tournament-by-id.component.scss']
})
export class TournamentByIdComponent implements OnInit {

  tournament = {} as Tournament;

  constructor() { }

  ngOnInit(): void {
    
  }

}
