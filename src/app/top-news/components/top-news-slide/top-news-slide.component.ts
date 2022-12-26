import { Component, OnInit } from '@angular/core';
import { TopNews } from 'src/app/core/model/top-news-model';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-top-news-slide',
  templateUrl: './top-news-slide.component.html',
  styleUrls: ['./top-news-slide.component.scss']
})
export class TopNewsSlideComponent {

  myTopNews!: TopNews[];
  responsiveOptions;

  constructor(){
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.myTopNews = [
      {
        id: 1,
        title:'Archibald',
        description:'Mon meilleur ami depuis tout petit !',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date()
      },
      {
        id: 2,
        title:'Dexter',
        description:'Mon meilleur ami depuis tout petit !',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date()
      },
      {
        id: 3,
        title:'Phuitone',
        description:'Mon meilleur ami depuis tout petit !',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date()
      },
      {
        id: 4,
        title:'Nagato',
        description:'Mon meilleur ami depuis tout petit !',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date()
      },
      
    ]
  }
}
