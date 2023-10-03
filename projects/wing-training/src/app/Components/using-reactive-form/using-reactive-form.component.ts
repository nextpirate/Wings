import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators ,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-using-reactive-form',
  templateUrl: './using-reactive-form.component.html',
  styleUrls: ['./using-reactive-form.component.css']
})
export class UsingReactiveFormComponent {

  constructor(){}
       reactiveForm:FormGroup=new FormGroup({
       personalDetails:new FormGroup({
        firstname : new FormControl("",Validators.required),
        lastname  : new FormControl(null)
       }),
        gender : new FormControl(null)
       })
  
  onSubmit(){
    console.log(this.reactiveForm);
  }
}
