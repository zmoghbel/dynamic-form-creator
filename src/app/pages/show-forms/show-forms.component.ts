import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/models/form';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-show-forms',
  templateUrl: './show-forms.component.html',
  styleUrls: ['./show-forms.component.css']
})
export class ShowFormsComponent implements OnInit {

  forms: Form[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllForms();
  }

  getAllForms(){
    this.apiService.getAllForms()
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.forms = res;
      },
      error:(err)=>{
        alert("Error while fetching forms data")
      }
    })
  }

}
