import { Component, OnInit } from '@angular/core';
import { FormAuth } from 'src/app/interfaces/formAuth';

const FORM_AUTH_DATA: FormAuth[] = [
  {id:1, formId: 1,roleId: 1, view: true, edit: true, delete: true},
  {id:2, formId: 1,roleId: 2, view: true, edit: true, delete: true},
];

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.css']
})
export class FormAuthComponent implements OnInit {
  displayedColumns: string[] = ['role', 'view', 'edit', 'delete'];
  dataSource = FORM_AUTH_DATA;
  formAuth: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
