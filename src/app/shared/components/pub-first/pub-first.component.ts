import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-pub-first',
  templateUrl: './pub-first.component.html',
  styleUrls: ['./pub-first.component.scss']
})
export class PubFirstComponent implements OnInit {

  constructor(private responsive: BreakpointObserver) {}

  mobile !: string;
  classer !: string; 
  
  ngOnInit () {
    if (window.screen.width <= 360) { // 768px portrait
     // this.mobile = true;
    }

    this.responsive.observe([
      Breakpoints.XSmall,
      Breakpoints.HandsetLandscape])
      .subscribe(result => {
    
        const breakpoints = result.breakpoints;
    
        if (breakpoints[Breakpoints.XSmall]) {
          console.log("screens matches TabletPortrait");
          this.mobile = "./../../../../assets/images/school/visa_succes_short.png";
          this.classer = "phone"
        }
        else {
          console.log("screens matches HandsetLandscape");
          this.classer = "large"
          this.mobile = "./../../../../assets/images/school/visa_succes.png";
        }
    
      });
  }
  
}
