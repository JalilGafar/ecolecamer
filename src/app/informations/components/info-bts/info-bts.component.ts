import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-bts',
  templateUrl: './info-bts.component.html',
  styleUrls: ['./info-bts.component.scss']
})
export class InfoBtsComponent implements OnInit{
  
  titre = "Trouvez votre formation";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  
  ngOnInit(): void {
  }

}

