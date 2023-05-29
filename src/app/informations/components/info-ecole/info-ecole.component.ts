import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-ecole',
  templateUrl: './info-ecole.component.html',
  styleUrls: ['./info-ecole.component.scss']
})
export class InfoEcoleComponent implements OnInit{
  
  titre = "Trouvez votre formation";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  
  ngOnInit(): void {
  }

}

