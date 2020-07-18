import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  categories = [];
  clothes = [];
  isDesktop = false;
  constructor(private platform: Platform) { }

  ngOnInit() {
    this.isDesktop = this.platform.is('desktop');

    this.categories = [
      { name: 'T Shirts', desc: 'Starting from ₹399', imgUrl: '/assets/tshirts.jpg' },
      { name: 'Winterwear', desc: 'Starting from ₹699', imgUrl: '/assets/winterwear.jpg' },
      { name: 'Formals', desc: 'Starting from ₹1999', imgUrl: '/assets/formals.jpg' },
      { name: 'Jackets', desc: 'Starting from ₹999', imgUrl: '/assets/jackets.jpg' }
    ];
    this.clothes = [
      { name: 'Men\'s Formals', price: '2599', imgUrl: '/assets/clothes/mens-formals.jpg' },
      { name: 'Men\'s Jacket', price: '2999', imgUrl: '/assets/clothes/jacket.jpg' },
      { name: 'Men\'s Hoodie', price: '1999', imgUrl: '/assets/clothes/hoodie.jpg' },
      { name: 'Women\'s Skirt', price: '2599', imgUrl: '/assets/clothes/skirt.jpg' }
    ];
  }

}
