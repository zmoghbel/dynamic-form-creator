import { Component, Input, OnInit } from '@angular/core';
import { Field } from 'src/app/interfaces/field';

@Component({
  selector: 'app-view-field',
  templateUrl: './view-field.component.html',
  styleUrls: ['./view-field.component.css']
})
export class ViewFieldComponent implements OnInit {

  @Input() field = {} as Field;

  constructor() { }

  ngOnInit(): void {
  }

}
