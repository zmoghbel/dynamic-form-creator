import { Component, Input, OnInit } from '@angular/core';
import { Field } from 'src/app/interfaces/field';

@Component({
  selector: 'app-build-form',
  templateUrl: './build-form.component.html',
  styleUrls: ['./build-form.component.css']
})
export class BuildFormComponent implements OnInit {

  @Input() fieldsArr: Field[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
