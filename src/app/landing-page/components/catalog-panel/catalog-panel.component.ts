import { Component, OnInit } from '@angular/core';
import { TopNews } from 'src/app/core/model/top-news-model';

@Component({
  selector: 'app-catalog-panel',
  templateUrl: './catalog-panel.component.html',
  styleUrls: ['./catalog-panel.component.scss']
})
export class CatalogPanelComponent {

  myBts!: TopNews[];
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
      },
      
    ];
  }


  ngOnInit() {
    this.myBts = [
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
        title:'Zetsu',
        description:'Mon meilleur ami depuis tout petit !',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date()
      },
      {
        id: 4,
        title:'Gahara',
        description:'Mon meilleur ami depuis tout petit !',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date()
      },
      {
        id: 1,
        title:'Itakata',
        description:'Mon meilleur ami depuis tout petit !',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date()
      },
      {
        id: 2,
        title:'Dotone',
        description:'Mon meilleur ami depuis tout petit !',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date()
      },
      {
        id: 3,
        title:'Yamato',
        description:'Mon meilleur ami depuis tout petit !',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date()
      },
      {
        id: 4,
        title:'Shissui',
        description:'Mon meilleur ami depuis tout petit !',
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date()
      },

      
    ]
  }


}
