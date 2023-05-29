import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-formation',
  templateUrl: './info-formation.component.html',
  styleUrls: ['./info-formation.component.scss']
})
export class InfoFormationComponent implements OnInit{
  
  titre = "Trouvez votre formation";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  
  ngOnInit(): void {
  }

}

