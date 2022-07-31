import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login-table',
  templateUrl: './login-table.component.html',
  styleUrls: ['./login-table.component.scss']
})
export class LoginTableComponent implements OnInit {

  constructor(
    private fb: FormBuilder,

  ) { }
  isSubmitted = false;

  idForm = this.fb.group({
    
  
    email: [
      '',
      [
        Validators.required,
        // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        Validators.email,
        Validators.minLength(12),
        Validators.maxLength(30),
      ],
    ],
    password: [
      '',
      [
        Validators.required, 
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,30}$/)     
      
      ],
    ],
  });
  onSubmit() {
    this.isSubmitted = true;

    if (this.idForm.valid) {
      console.log('This form is Valid');
    
    } else {
      
      console.log('This form is Invalid');
    }

   

  }

getFormControl(controlName: string) {
 return this.idForm.get(controlName);
 }

 isInputValid = (formControl: string, errorType: string) => {

  return this.idForm.get(formControl)?.errors?.[errorType];

};

  newFunction():void{
    
  }
  ngOnInit(): void {
  }

}

