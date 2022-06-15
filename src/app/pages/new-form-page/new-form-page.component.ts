import { Component, OnInit } from '@angular/core';
import { Field } from 'src/app/models/field';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-form-page',
  templateUrl: './new-form-page.component.html',
  styleUrls: ['./new-form-page.component.css']
})
export class NewFormPageComponent implements OnInit {
  
  feildsArr: Field[] = [];
  formTitle: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  addField(field: Field){
    //console.log("This is Parent: " , field);
    this.feildsArr.push(field);
    console.log("This is Parent: " , this.feildsArr);
  }

  addForm(){
    this.apiService.addForm({title: this.formTitle, type: 2 , fields: this.feildsArr})
    .subscribe({
      next:(res)=>{
        alert("Form added successfully");
        this.feildsArr = [];
        this.formTitle = '';
      },
      error:()=>{
        alert("Error while adding the Form")
      }
    });
  }

}
