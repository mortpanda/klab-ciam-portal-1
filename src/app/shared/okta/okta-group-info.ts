  //ANGULAR-CIAM-DEMO-PORTAL-CALCULATOR
  //ANGULAR-CIAM-DEMO-PORTAL-NEWS
  //ANGULAR-CIAM-DEMO-PORTAL-PROFILE
export interface OktaGroupInfo {
  name: string;
  groupname: string;
  img: string;
  url: string;
}

export const PortalApps = [
  {
    name: 'Profile Viewer',
    groupname: 'ANGULAR-CIAM-DEMO-PORTAL-PROFILE',
    img: 'assets/img/okta_user.png',
url:'https://mortpanda.github.io/jpn-corp-ae-portal-profile/',
  },
  {
    name: 'News App',
    groupname: 'ANGULAR-CIAM-DEMO-PORTAL-NEWS',
    img:'assets/img/okta_annoucement.png',
    url:'https://mortpanda.github.io/jpn-corp-ae-portal-news/',
  },
  {
    name: 'DENTAKU',
    groupname: 'ANGULAR-CIAM-DEMO-PORTAL-CALCULATOR',
    img:'assets/img/okta_scalable_apps.png',
    url:'https://mortpanda.github.io/jpn-corp-ae-portal-calc/',
  },
]