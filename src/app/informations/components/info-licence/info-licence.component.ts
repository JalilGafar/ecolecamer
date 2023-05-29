import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-licence',
  templateUrl: './info-licence.component.html',
  styleUrls: ['./info-licence.component.scss']
})
export class InfoLicenceComponent implements OnInit{
  
  titre = "Trouvez votre formation";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  
  ngOnInit(): void {
  }

}

