import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {LoginService} from '../services/login/login.service';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginform:FormGroup ;
  pass_user: boolean = false;
  email_user: boolean = false;
  hide = true;
  patterns = '^(?=.*[a-zA-Z])[a-zA-Z0-9]+$';
  specialchar = false;
  username:any ;
  password;any;
  
  constructor(private deviceService: DeviceDetectorService,
              private _router : Router,
              public formbuilder: FormBuilder,
              public details: LoginService) {
                localStorage.removeItem('loginInfo');
    // localStorage.removeItem('loginInfo');
    // const isMobile = this.deviceService.isMobile();
    // // if(isMobile){
    // //   this._router.navigate(['404']);
    // // };
    
    this.loginform = this.formbuilder.group({
      email:['',[Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
      pass: ['',[Validators.required] ],
   });
  }

  ngOnInit() {
    
  }
close(event, value){
  // console.log(event);
  if(value == 'username'){
      if(event != this.patterns){
        this.email_user = true;
        // console.log(this.email_user);

      }else{
    this.email_user = false;
    // console.log(this.email_user);
      }
  }
  else if(value == 'pass'){
    // console.log(event);
    if(event == ''){
      this.pass_user = true;
    }else{
   this.pass_user = false;
    }
  }

}
  
  login(email, password ){
    let obj = { username: email, password: password };
    if(this.loginform.invalid){
      this.email_user = true;
      this.pass_user = true;
      return;
    }
    else{
      this.details.login(obj ).then((result:any) => {
      localStorage.setItem('loginInfo', JSON.stringify(result));
      if(result.role == 'HO'){
        this._router.navigate(['home']);
      }else if(result.role == 'BRANCH'){
        this._router.navigate(['home']);
      }
    }, (err) => {
     alert(err.error.Error.MessageToUser);
    });
  	}
 }
}




