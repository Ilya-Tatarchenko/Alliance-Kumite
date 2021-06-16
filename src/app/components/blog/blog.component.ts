import { Component, OnInit } from '@angular/core';
import { Tournament } from 'src/app/interfaces/tournaments';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  tournaments:any[] = [];
  
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getTournaments()
      .subscribe((res: Tournament) => {
        this.tournaments = res.tournaments;
        console.log(res);
        console.log(this.tournaments);
      });
  }

       

}
