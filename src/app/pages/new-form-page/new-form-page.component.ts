import { Component, OnInit } from '@angular/core';
import { Field } from 'src/app/interfaces/field';

@Component({
  selector: 'app-new-form-page',
  templateUrl: './new-form-page.component.html',
  styleUrls: ['./new-form-page.component.css']
})
export class NewFormPageComponent implements OnInit {
  
  feildsArr: Field[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addField(field: Field){
    //console.log("This is Parent: " , field);
    this.feildsArr.push(field);
    console.log("This is Parent: " , this.feildsArr);
  }

}
