import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { HTTP_PROVIDERS } from '@angular/http';
@Component({
  moduleId: module.id,
  selector: 'app-movie',
  templateUrl: 'movie.component.html',
  styleUrls: ['movie.component.css'],
  providers: [HTTP_PROVIDERS]
})
export class MovieComponent implements OnInit {
public movie;
public title;
public poster_path;
public overview;
public release_date;
public vote_average;
  constructor(private http: Http) { }

  ngOnInit() {
  this.getMovie();
  }
  getMovie() {
    this.http.get('https://api.themoviedb.org/3/movie/157336?api_key=2976494fa212717ffd99064db521c297')
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.movie = data,
        this.title=data.title,
        this.poster_path=data.poster_path,
        this.overview=data.overview,
        this.release_date=data.release_date,
        this.vote_average=data.vote_average

        },
        err => console.error(err),
        () => console.log('done')
      );
  }


}
