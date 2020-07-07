import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public isDesktop = false;

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Men',
      url: '/home',
      icon: 'male'
    },
    {
      title: 'Women',
      url: '/home',
      icon: 'female'
    },
    {
      title: 'Accessories',
      url: '/home',
      icon: 'cube'
    },
    {
      title: 'Profile',
      url: '/home',
      icon: 'person'
    },
    {
      title: 'logout',
      url: '/login',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.isDesktop = this.platform.is('desktop');
  }
}
