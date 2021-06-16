import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tournament } from '../interfaces/tournaments';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  constructor(public http: HttpClient) { }

  getTournaments(): Observable<Tournament>{
    return this.http.get<Tournament>('../../../assets/tournaments.json');
  }

}
