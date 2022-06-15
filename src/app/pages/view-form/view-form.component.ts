import { Component, Input, OnInit } from '@angular/core';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Field } from 'src/app/models/field';
import { Form } from 'src/app/models/form';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {
  id?: number;
  form: Form = {} as Form;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
    });
    this.getForm();

  }

  getForm(){
    this.apiService.getForm(Number(this.id)).subscribe({
      next:(res)=>{this.form = res},
      error(){alert("Error while fetching form information")}
    });
  }

  onDeleteClick(id?: number){

  }
}
