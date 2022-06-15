import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Form } from '../models/form';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders ({
      'Content-Type' : 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

// This service for connecting with fake server 
// This server run CRUD and other operation
export class ApiService {
  
  // The URL of created Form in our system
  private apiUrl = "http://localhost:3000/forms"; 

  constructor(private http: HttpClient) { }
  
  getAllForms() : Observable<Form[]>{
    return this.http.get<Form[]>(this.apiUrl);
  }

  getForm(formId: number): Observable<Form> {
    const url = `${this.apiUrl}/${formId}`;
    return this.http.get<Form>(url);
  }

  addForm(form: Form) : Observable<Form>{
    return this.http.post<Form>(this.apiUrl, form, httpOptions);
  }

  deleteForm(formId?: number ) : Observable<Form>{
    const url = `${this.apiUrl}/${formId}`;
    return this.http.delete<Form>(url);
  }

  updateForm(formId: string | number, changes: Partial<Form>): Observable<Form>{
    const url = `${this.apiUrl}/${formId}`;
    return this.http.put<Form>(url, changes, httpOptions);
  }
}