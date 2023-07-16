import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Diplome } from 'src/app/admin/models/diplome.model';
import { TopNews } from 'src/app/core/model/top-news-model';
import { SomeDegreeService } from 'src/app/services/some-degree.service';

@Component({
  selector: 'app-catalog-panel',
  templateUrl: './catalog-panel.component.html',
  styleUrls: ['./catalog-panel.component.scss']
})
export class CatalogPanelComponent {

  myBtss!: TopNews[];
  someBts$!: Observable<Diplome[]>;
  someLicence$!: Observable<Diplome[]>;
  responsiveOptions;

  constructor(private someDegree : SomeDegreeService,
              private  appRout : Router){
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
    this.someBts$ = this.someDegree.getSomeDegree('BTS')
    this.someLicence$ = this.someDegree.getSomeDegree('Licence')
  }

  showThisDegree (degree : string){
    //const url = this.appRout.serializeUrl(this.appRout.createUrlTree(['diplome/'], { queryParams: {degree:degree} }));
    //window.open(url, '_blank');
    this.appRout.navigate(['diplome/'], { queryParams: {degree:degree} } );
  }

}
