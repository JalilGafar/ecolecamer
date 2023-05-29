import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-diplome',
  templateUrl: './info-diplome.component.html',
  styleUrls: ['./info-diplome.component.scss']
})
export class InfoDiplomeComponent implements OnInit{
  
  titre = "Trouvez votre formation";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  
  ngOnInit(): void {
  }

}
