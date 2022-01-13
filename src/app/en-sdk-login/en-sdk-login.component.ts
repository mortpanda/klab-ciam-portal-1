import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "app/shared/okta/okta-en-authentication";

import { ViewEncapsulation } from '@angular/core';
// import { OktaSDKAuthService } from 'app/shared/okta/okta-auth-service';
import { OktaConfigService } from "app/shared/okta/okta-config.service";


@Component({
  selector: 'app-en-sdk-login',
  templateUrl: './en-sdk-login.component.html',
  styleUrls: ['./en-sdk-login.component.css']
})
export class EnSdkLoginComponent implements OnInit {
  loginform: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  strLanguage: any;

  // constructor(private fb: FormBuilder, private authService: AuthService,private OktaConfig: OktaConfig,private oktaSDKAuth: OktaSDKAuthService) {}
  constructor(private fb: FormBuilder, private authService: AuthService,private OktaConfigService: OktaConfigService) {}

  async ngOnInit() {
    this.strLanguage = 'English';
    this.loginform = this.fb.group({
      username: ["", Validators.email],
      password: ["", Validators.required]
    });
    
    if (await this.authService.checkAuthenticated()) {
      await console.log("logged in, redirecting you to the portal page : " + this.OktaConfigService.strEnPortal);
      window.location.replace(this.OktaConfigService.strEnPortal);
      
    }
  }

  async onSubmit() {
    // console.log("event fired");
    // console.log("loginInvalid", this.loginInvalid);
    // console.log("formSubmitAttempt", this.formSubmitAttempt);
    console.log("redirectUri = ", this.OktaConfigService.strEnPortal);

    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    //if (this.loginform.valid) {
      //try {
        var username = this.loginform.get("username").value;
        var password = this.loginform.get("password").value;
        await this.authService.login(username, password);
        //} catch (err) {
        console.log("stateToken = " + this.authService.strstateToken);
        console.log("Injecting the stateToken into the Widget");
        this.loginInvalid = true;
      //}
    //} else 
    {
      this.formSubmitAttempt = true;
      //console.log("username", username);
      //console.log("password", password);
    }
  }
  logout(){
    
    this.authService.OktaLogout();
    
    }
}
