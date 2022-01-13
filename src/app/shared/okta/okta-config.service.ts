import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OktaConfigService {
  constructor() { }



  //AS Rock https://kent-nagao-test.oktapreview.com
  // strBaseURI = 'https://kent-nagao-test.oktapreview.com';  
  // strRedirectURL = 'https://192.168.1.210:4200/klab-okta-siw-hibp-v2/';
  // strClientID = '0oa2bz1t9nif5tXcC1d7';
  // strIssuer = 'https://kent-nagao-test.oktapreview.com/';
  // strPostLogoutURL = 'https://192.168.1.210:4200/klab-okta-siw-hibp-v2';
  // strScope = ['openid', 'email', 'profile','address'];
  // strResponseType = 'code';
  // strResponseMode = 'fragment';
  //  strPrompt = 'consent';
  // strPkce = true;
  // strLang = 'ja';
  // strBrand =  '#00297A';
  // strLogo = "assets/img/okta-japan-logo.jpg";


  //Github Pages https://kent-nagao-test.oktapreview.com
  strBaseURI = 'https://kent-nagao-test.oktapreview.com';
  strRedirectURL = 'https://mortpanda.github.io/klab-okta-siw-hibp-v2/';
  strClientID = '0oa2bz1t9nif5tXcC1d7';
  strIssuer = 'https://kent-nagao-test.oktapreview.com';
  strPostLogoutURL = 'https://mortpanda.github.io/klab-okta-siw-hibp-v2//';
  strScope = ['openid', 'email', 'profile', 'address'];
  strResponseType = 'code';
  strResponseMode = 'fragment';
  strPrompt = 'consent';
  strPkce = true;
  strLang = 'ja';
  strBrand = '#00297A';
  strLogo = "assets/img/okta-japan-logo.jpg";

}