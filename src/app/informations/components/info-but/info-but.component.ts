import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-but',
  templateUrl: './info-but.component.html',
  styleUrls: ['./info-but.component.scss']
})
export class InfoButComponent implements OnInit{
  
  titre = "Trouvez votre formation";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  
  ngOnInit(): void {
  }

}

