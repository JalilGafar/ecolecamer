import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-dut',
  templateUrl: './info-dut.component.html',
  styleUrls: ['./info-dut.component.scss']
})
export class InfoDutComponent implements OnInit{
  
  titre = "Trouvez votre formation";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  
  ngOnInit(): void {
  }

}

