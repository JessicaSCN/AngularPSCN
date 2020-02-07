import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor() {}

  title = 'ngSlick';

  slides = [
    { img: 'assets/img/marcas/acer.jpg' },
    { img: 'assets/img/marcas/dell2.jpg' },
    { img: 'assets/img/marcas/hp2.jpg' },
    { img: 'assets/img/marcas/microsoft.jpg' },
    { img: 'assets/img/marcas/iphone.jpg' },
    { img: 'assets/img/marca/nikon.png' },
    { img: 'assets/img/marcas/nokia.jpg' },
    { img: 'assets/img/marcas/samsung.jpg' },
    { img: 'assets/img/marcas/sony.png' },
    { img: 'assets/img/marcas/xiaomi.jpg' },
    { img: 'assets/img/marcas/android.jpg' }
  ];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<div class=\'nav-btn next-slide\'></div>',
    prevArrow: '<div class=\'nav-btn prev-slide\'></div>',
    dots: true,
    infinite: false
  };

  addSlide() {
    this.slides.push({ img: 'assets/img/marcas/sony.png' });
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

  ngOnInit() {}
}
