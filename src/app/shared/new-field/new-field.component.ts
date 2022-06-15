import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
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
  hsaOption: boolean = false;

  fieldForm = this.formBuilder.group({
    title: ['',Validators.required],
    demoTitle: ['',Validators.required],
    type: '',
    description: '',
    required: '',
    validation: '',
    displayFormat: '',
    accessLevel: '',
    typeOptions: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  get typeOptions() {
    return this.fieldForm.get('typeOptions') as FormArray;
  }

  addTypeOption() {
    this.typeOptions.push(this.formBuilder.control(''));
  }

  onSubmitFieldForm(){
    console.warn('Your new field has submitted in child: ', this.fieldForm.value);
    if(this.fieldForm.valid){
      this.newFieldEvent.emit(this.fieldForm.value);
      this.fieldForm.reset();
    }    
  }

}
