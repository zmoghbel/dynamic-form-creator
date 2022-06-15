import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-auth',
  templateUrl: './field-auth.component.html',
  styleUrls: ['./field-auth.component.css']
})
export class FieldAuthComponent implements OnInit {
  
  fieldAuth: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
