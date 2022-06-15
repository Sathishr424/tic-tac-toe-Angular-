import { Component, Input } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent{

  @Input() value: 'O' | 'X';
  @Input() entry: boolean;

  getValue(){
    console.log(this.value, this.entry);
    console.log(document.getElementsByTagName('button')[0].className);
    return this.value;
  }

}
