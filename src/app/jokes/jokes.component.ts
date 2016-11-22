import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-jokes',
  templateUrl: 'jokes.component.html',
  styleUrls: ['jokes.component.css'],
  providers: [HTTP_PROVIDERS]
})
export class JokesComponent implements OnInit {
public joke;
public values;
public active = true;
val='';
  constructor(private http: Http) { }

  ngOnInit() {

  this.getJoke(1);
  }

  getJoke(val)
{
this.active = false;
  setTimeout(() => this.active = true, 1000);
this.http.get('http://api.icndb.com/jokes/random/'+val)
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.joke = data,
        this.values=data.value

        },
        err => console.error(err),
        () => console.log('done')
      );

  }


}
