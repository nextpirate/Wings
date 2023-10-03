import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


function passwordMatchValidator(control: AbstractControl){
  const password:any = control.get('password');
  const cpassword:any = control.get('cpassword');  
  if (password.value !== cpassword.value) {
    return { passwordsNotMatch: true };
  }
  return null;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  
  

  @ViewChild('UUsername') Username:ElementRef | undefined
  @ViewChild('PPassword') Password:ElementRef | undefined
  @ViewChild('cPPassword') cPassword:ElementRef | undefined
  loginForm=new FormGroup({
    user:new FormControl('Shubh',[Validators.required]),
    password:new FormControl('',[Validators.required, Validators.minLength(6)]),
    cpassword:new FormControl('',[Validators.required])
  })


  

  // constructor(private formBuilder: FormBuilder) {
  //   this.loginForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     cpassword: ['', Validators.required]
  //   }, {
  //     validator: passwordMatchValidator
  //   });
  // }
 

  loginUser(){
    console.log(this.loginForm)
    localStorage.setItem('Username',this.Username?.nativeElement.value);
    localStorage.setItem('Password',this.Password?.nativeElement.value);
  }


  shows(){
    console.log(this.loginForm)
  }

  get users(){
    return this.loginForm.get('user');
  }
get pass(){
  return this.loginForm.get('password');
  }
get cpass(){
  return this.loginForm.get('cpassword');
  }
}


// private firstObsSubscriber:Subscription | undefined;
 
  
  // ngOnInit(): void {
  //  this.firstObsSubscriber= interval(1000).subscribe(count =>{
  //     console.log(count);
      
  //   })
  //   const customIntervalObservable =Observable.create((observer: { next: (arg0: number) => void; })=>{
  //     let count=0;
  //     setInterval(()=>{
  //       observer.next(count);
  //       count++
  //     },1000)
  //   });
  
  //   this.firstObsSubscriber=customIntervalObservable.subscribe((data: any)=>{
  //     console.log(data)
  //   })
  // }
  // ngOnDestroy(): void {
  //   this.firstObsSubscriber?.unsubscribe()
 
 
   
  //  }
  // loginForm=new FormGroup({
  //   uname:new FormControl("username",[Validators.required,Validators.minLength(8),]),
  //   password:new FormControl("Enter password",[Validators.required,Validators.minLength(8)]),
  //   date:new FormControl("Enter Date of Birth",[Validators.required]),
  //   email:new FormControl(".com",[Validators.required])
  // })
 


  

  

