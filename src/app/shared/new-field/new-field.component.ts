import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-field',
  templateUrl: './new-field.component.html',
  styleUrls: ['./new-field.component.css']
})
export class NewFieldComponent implements OnInit {
  /*
  fields = this.formBuilder.group({
      fieldsSpec: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });*/

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
