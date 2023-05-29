import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-cap',
  templateUrl: './info-cap.component.html',
  styleUrls: ['./info-cap.component.scss']
})
export class InfoCapComponent implements OnInit{
  
  titre = "Trouvez votre formation";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  
  ngOnInit(): void {
  }

}

