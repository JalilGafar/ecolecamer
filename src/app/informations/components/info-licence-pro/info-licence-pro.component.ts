import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-licence-pro',
  templateUrl: './info-licence-pro.component.html',
  styleUrls: ['./info-licence-pro.component.scss']
})
export class InfoLicenceProComponent implements OnInit{
  
  titre = "Trouvez votre formation";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  
  ngOnInit(): void {
  }

}

