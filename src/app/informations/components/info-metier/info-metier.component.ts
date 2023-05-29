import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-metier',
  templateUrl: './info-metier.component.html',
  styleUrls: ['./info-metier.component.scss']
})
export class InfoMetierComponent implements OnInit{
  
  titre = "Un Métier qui te correspond";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  
  ngOnInit(): void {
  }

}

