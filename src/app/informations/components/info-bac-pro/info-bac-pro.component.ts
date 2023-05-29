import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-bac-pro',
  templateUrl: './info-bac-pro.component.html',
  styleUrls: ['./info-bac-pro.component.scss']
})
export class InfoBacProComponent implements OnInit{
  
  titre = "Bac Pro";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  
  ngOnInit(): void {
  }

}

