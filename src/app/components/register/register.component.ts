import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private signup:SignupService, private route:Router) {
    this.form = this.formBuilder.group({
      username:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
    });
   }

  ngOnInit(): void {
  }

  get Username(){
    return this.form.get('username');
  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }

  onSubmit(event: Event){
    event.preventDefault();

    this.signup.Signup(this.form.value).subscribe(data => {
      console.log("DATA" + JSON.stringify(data));
      this.route.navigate(['/portfolio']);
    });
  }

}
