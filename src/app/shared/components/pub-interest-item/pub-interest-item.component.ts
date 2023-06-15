import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { EtablissementModule } from 'src/app/etablissement/etablissement.module';

@Component({
  selector: 'app-pub-interest-item',
  templateUrl: './pub-interest-item.component.html',
  styleUrls: ['./pub-interest-item.component.scss']
})
export class PubInterestItemComponent implements OnInit{

  @Input() school!: interestelt;
  visible!: boolean;

  constructor( private  appRout : Router ){}
 
  ngOnInit(): void {

  }

  showDialog() {
    this.visible = true;
  }

  showOnePage(school: string){
    const url = this.appRout.serializeUrl(this.appRout.createUrlTree(['etablissement/'], { queryParams: {school:school} }));
    window.open(url, '_blank');
    //window.open(`/etablissement/${school}`, '_blank')
    //this.appRout.navigate(['etablissement/'], {queryParams: {school:school} })
  }

  sendNumber(){

  }
}
