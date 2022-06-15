import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares: any[];
  winner: string | null;
  xTurn: boolean;
  mouseIndex: number;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  setMouseIndex(index: number){
    this.mouseIndex = index;
  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xTurn = true;
  }

  makeMove(index: number){
    if (!this.squares[index] && !this.winner){
      this.squares[index] = this.xTurn ? 'X' : 'O';
      let res = this.checkWinner();
      if (res == 'DRAW'){
        this.winner = res;
      }else if(res == 'X' || res == 'O'){
        this.winner = this.xTurn ? 'X' : 'O';
      }
      this.xTurn = !this.xTurn;
    }
  }

  checkWinner(): 'X' | 'O' | 'DRAW' | 'GOING'{
      let player = this.xTurn ? 'X' : 'O';
      if (this.squares[0] === player && this.squares[1] === player && this.squares[2] === player) return this.xTurn ? 'X' : 'O';
      if (this.squares[3] === player && this.squares[4] === player && this.squares[5] === player) return this.xTurn ? 'X' : 'O';
      if (this.squares[6] === player && this.squares[7] === player && this.squares[8] === player) return this.xTurn ? 'X' : 'O';
    
      if (this.squares[0] === player && this.squares[3] === player && this.squares[6] === player) return this.xTurn ? 'X' : 'O';
      if (this.squares[1] === player && this.squares[4] === player && this.squares[7] === player) return this.xTurn ? 'X' : 'O';
      if (this.squares[2] === player && this.squares[5] === player && this.squares[8] === player) return this.xTurn ? 'X' : 'O';
    
      if (this.squares[0] === player && this.squares[4] === player && this.squares[8] === player) return this.xTurn ? 'X' : 'O';
      if (this.squares[2] === player && this.squares[4] === player && this.squares[6] === player) return this.xTurn ? 'X' : 'O';
    
      for (var i in this.squares){
        if (!this.squares[i]) return 'GOING';
      }
      return 'DRAW';
  }
}
