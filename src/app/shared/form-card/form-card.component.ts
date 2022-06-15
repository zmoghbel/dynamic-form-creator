import { EventEmitter,Component, Input, OnInit, Output } from '@angular/core';
import { Form } from 'src/app/models/form';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit {

  @Input() form = {} as Form;
  @Output() selectedForm = new EventEmitter<Form>();

  constructor(
    private apiService: ApiService,
    private router: Router 
    ) { }

  ngOnInit(): void {
    console.log("field info", this.form.fields)
  }

  onViewClick(formId?: number ){
    //this.selectedForm.emit(form);
    this.router.navigate(['/view-form', { id: formId }]);
  }

  onEditClick(form: Form){
    this.selectedForm.emit(form);
  }

  onDeleteClick(formId?: number){
    this.apiService.deleteForm(formId)
  }
}
