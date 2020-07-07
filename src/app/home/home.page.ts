import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  clothes = [];
  isDesktop = false;
  constructor(private platform: Platform) { }

  ngOnInit() {
    this.isDesktop = this.platform.is('desktop');

    this.clothes = [
      { name: 'Women\'s Top', price: '1599', imgUrl: '/assets/clothes/top.jpg' },
      { name: 'Men\'s Jacket', price: '2999', imgUrl: '/assets/clothes/jacket.jpg' },
      { name: 'Men\'s Hoodie', price: '1999', imgUrl: '/assets/clothes/hoodie.jpg' },
      { name: 'WOmen\s Skirt', price: '2599', imgUrl: '/assets/clothes/skirt.jpg' }
    ];
  }

}
