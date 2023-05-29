import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-bachelor',
  templateUrl: './info-bachelor.component.html',
  styleUrls: ['./info-bachelor.component.scss']
})
export class InfoBachelorComponent implements OnInit{
  
  titre = "Trouvez votre formation";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  
  ngOnInit(): void {
  }

}

