
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-using-template-driven-forms',
  templateUrl: './using-template-driven-forms.component.html',
  styleUrls: ['./using-template-driven-forms.component.css']
})
export class UsingTemplateDrivenFormsComponent {

  onSubmit(form: NgForm){
    console.log(form);
  }
}
