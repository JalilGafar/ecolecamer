import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-prepa',
  templateUrl: './info-prepa.component.html',
  styleUrls: ['./info-prepa.component.scss']
})
export class InfoPrepaComponent implements OnInit{
  
  titre = "Prépa";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  
  ngOnInit(): void {
  }

}

