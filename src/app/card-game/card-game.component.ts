import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { HTTP_PROVIDERS } from '@angular/http';


@Component({
  moduleId: module.id,
  selector: 'app-card-game',
  templateUrl:'card-game.component.html',
  styleUrls: ['card-game.component.css'],
  providers: [HTTP_PROVIDERS]

})
export class CardGameComponent implements OnInit {
public deck_id;
public gameData;
public cardData;
public codes;
public img1;
public img2;
public deckid='3g6qlqmvl9a1';
public images;
public val1;
public val2;
deck1='';
val='';
  constructor(private http: Http) { }

  ngOnInit() {
  this.getDeckId(1);
this.drawCard();

  }
  getDeckId(val){
  this.http.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count='+val)
        .map((res:Response) => res.json())
        .subscribe(
          data => { this.gameData = data,
          this.deck_id=data.deck_id

},
          err => console.error(err),
          () => console.log('done')

        );
          return this.deck_id;
        }

    drawCard(){


    this.http.get('http://deckofcardsapi.com/api/deck/new/draw/?count=2')
          .map((res:Response) => res.json())
          .subscribe(
            data => { this.cardData = data,
            this.codes=data.cards,
            this.img1=data.cards[0].images.png,
            this.img2=data.cards[1].images.png,
            this.val1=data.cards[0].value,
            this.val2=data.cards[1].value

},
            err => console.error(err),
            () => console.log('done')

          );

          }
          higher(val1,val2)
          {
           if(val2>val1)
           {

            return("You win!");
            }

            else if(val1==val2)
            {

            return("Equal!");
            }
            else
            {

             return("Better luck next time!");
            }


}

            lower(val1,val2)
            {

             if(val2<val1)
             {

              return("You win!");
              }
              else if(val1==val2)
              {

              return("Equal!");
              }
              else
              {

               return("Better luck next time!");
              }

            }
            value(v){
            if(v=='ACE')
            {
            return v=14;
            }
            else if(v=='KING')
            {
            return v=13;
            }
            else if(v=='QUEEN')
            {
            return v=12;
            }
            else if(v=='JACK')
            {
            return v=11;
            }
            else if(v=='10')
            {
            return v=10;
            }
            else if(v=='9')
            {
            return v=9;
            }
            else if(v=='8')
            {
            return v=8;
            }
            else if(v=='7')
            {
            return v=7;
            }
            else if(v=='6')
            {
            return v=6;
            }
            else if(v=='5')
            {
            return v=5;
            }
            else if(v=='4')
            {
            return v=4;
            }
            else if(v=='3')
            {
            return v=3;
            }
            else if(v=='2')
            {
            return v=2;
            }
            }

}
