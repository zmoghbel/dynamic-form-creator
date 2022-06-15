import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fieldTypes } from 'src/app/constants/feildTypeValues';
import { Field } from 'src/app/models/field';
import { FieldType } from 'src/app/interfaces/fieldType';

@Component({
  selector: 'app-new-field',
  templateUrl: './new-field.component.html',
  styleUrls: ['./new-field.component.css']
})
export class NewFieldComponent implements OnInit {

  @Output() newFieldEvent = new EventEmitter<Field>();

  types: FieldType[] = fieldTypes;

  fieldForm = this.formBuilder.group({
    title: ['',Validators.required],
    demoTitle: ['',Validators.required],
    type: '',
    description: '',
    required: '',
    validation: '',
    displayFormat: '',
    accessLevel: ''
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmitFieldForm(){
    console.warn('Your new field has submitted in child: ', this.fieldForm.value);
    if(this.fieldForm.valid){
      this.newFieldEvent.emit(this.fieldForm.value);
      this.fieldForm.reset();
    }    
  }

}
