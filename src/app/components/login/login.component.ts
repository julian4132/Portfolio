import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private auth:AuthService, private route:Router) {
    this.form = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
      deviceInfo:this.formBuilder.group({
        deviceId: ["24563455"],
        deviceType: ["DEVICE_TYPE_ANDROID"],
        notificationToken:["2356345fsfdg"]
      })
    });
   }

  ngOnInit(): void {
  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }

  onSubmit(event: Event){
    event.preventDefault();

    this.auth.Login(this.form.value).subscribe(data => {
      console.log("DATA" + JSON.stringify(data));
      this.route.navigate(['/portfolio']);
    });
  }


}
