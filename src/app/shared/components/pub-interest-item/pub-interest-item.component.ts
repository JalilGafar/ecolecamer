import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  visibleCall!: boolean;
  userPhone!: string;


  constructor( private  appRout : Router ){}
 
  ngOnInit(): void {

  }

  showDialog() {
    this.visible = true;
  }

  showOnePage(school: string){
    const url = this.appRout.serializeUrl(this.appRout.createUrlTree(['etablissement/'], { queryParams: {school:school} }));
    window.open(url, '_blank');
  }

  sendNumber(){
    this.visible = false;
    this.visibleCall = true;
  }

  onSubmitPhone(form : NgForm){
    console.log(form.value)
  }
}
