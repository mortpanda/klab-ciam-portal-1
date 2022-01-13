import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "app/shared/okta/okta-authentication";

import { ViewEncapsulation } from '@angular/core';
// import { OktaSDKAuthService } from 'app/shared/okta/okta-auth-service';
import { OktaConfigService } from "app/shared/okta/okta-config.service";

@Component({
  selector: 'app-sdk-login',
  templateUrl: './sdk-login.component.html',
  styleUrls: ['./sdk-login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SdkLoginComponent implements OnInit {
  loginform: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  strLanguage: any;

  // constructor(private fb: FormBuilder, private authService: AuthService,private OktaConfig: OktaConfig,private oktaSDKAuth: OktaSDKAuthService) {}
  constructor(private fb: FormBuilder, private authService: AuthService,private OktaConfigService: OktaConfigService) {}

  async ngOnInit() {
    this.strLanguage = '日本語';
    this.loginform = this.fb.group({
      username: ["", Validators.email],
      password: ["", Validators.required]
    });
    
    if (await this.authService.checkAuthenticated()) {
      await console.log("logged in, redirecting you to the portal page : " + this.OktaConfigService.strRedirectURL);
      window.location.replace(this.OktaConfigService.strRedirectURL);
      
    }
  }

  async onSubmit() {
    // console.log("event fired");
    // console.log("loginInvalid", this.loginInvalid);
    // console.log("formSubmitAttempt", this.formSubmitAttempt);
    console.log("redirectUri = ", this.OktaConfigService.strRedirectURL);

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
