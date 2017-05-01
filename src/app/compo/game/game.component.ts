import { Component, 
  OnInit, 
  ElementRef, 
  ViewChild 
} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: []
})
export class GameComponent implements OnInit {

  polegry = new Array();
  polegrysizex:number = 5;
  polegrysizey:number = 5;
  cubesize:string = "50";
  cubesizeint:number = parseInt(this.cubesize);
  private selecteelement:{x:number, y:number};
  private selecteelementstatus:boolean;
  private roznicjest:number;
  private time:number=0;
  private timehandler;
  private statusgame:boolean;

  @ViewChild("gamearea") gamearea:ElementRef;

  constructor() {
    this.selecteelement = {x:-1,y:-1};
    this.selecteelementstatus = false;
    this.roznicjest = 0
  }

  ngOnInit() {
    console.log(this.gamearea);
    this.gamearea.nativeElement.style.width = ((this.cubesizeint+4)*(this.polegrysizex))+"px";
    this.clearArena();
    this.stopGame();
  }

  startGame(){
    this.stopGame();
    this.statusgame = true;
    this.clearArena();
  }

  resterGame(){
    this.startGame();
  }

  private clearArena() : void{
    this.time = 0;
    let value_aray = new Array(this.polegrysizex*this.polegrysizey);
    for(let x=0;x<this.polegrysizex*this.polegrysizey;x++){
      value_aray[x] ={value:x,correct:true};
    }

    value_aray = this.shuffle(value_aray);

    this.polegry = new Array(this.polegrysizex);
    for(let x=0;x<this.polegrysizex;x++){
      this.polegry[x] = new Array(this.polegrysizey);
      for(let y=0;y<this.polegrysizey;y++){
        this.polegry[x][y]=value_aray[(x*this.polegrysizey+y)];
      }
    }

    this.polich();
    this.startTime();
  }

  private startTime(){
    this.time++;
    let _this = this;
    this.timehandler = setTimeout( function(){
      _this.startTime();
    },1000);
  }

  stopGame(){
    this.statusgame = false;
    clearTimeout(this.timehandler);
  }

  setPoleValue(x:number, y:number, value):void {
    this.polegry[x][y] = value;
  }
  
  selectPlage(x:number, y:number):void | boolean {

    if(!this.statusgame) return false;

    if(!this.selecteelementstatus){
      this.selecteelement = {x:x,y:y};
      this.selecteelementstatus = true;
    } else {

      let a = this.polegry[this.selecteelement.x][this.selecteelement.y];
      this.polegry[this.selecteelement.x][this.selecteelement.y] =
        this.polegry[x][y];
      a.correct = true;
      this.polegry[x][y] = a;
      this.polegry[this.selecteelement.x][this.selecteelement.y].correct = true;

      this.selecteelement = {x:-1,y:-1};
      this.selecteelementstatus = false;

      this.polich();
    }
  }

  polich(){
    this.roznicjest = 0;
    for(let x=0;x<this.polegrysizex;x++){
      for(let y=0;y<this.polegrysizey;y++){
        if( this.polegry[x][y].value != (x*this.polegrysizey+y) ){
          this.polegry[x][y].correct = false;
          this.roznicjest++;
        }
      }
    }

    if(this.roznicjest == 0)
      this.stopGame();
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
}
