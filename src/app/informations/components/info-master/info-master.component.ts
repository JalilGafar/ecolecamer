import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-master',
  templateUrl: './info-master.component.html',
  styleUrls: ['./info-master.component.scss']
})
export class InfoMasterComponent implements OnInit{
  
  titre = "Trouvez votre formation";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  
  ngOnInit(): void {
  }

}

