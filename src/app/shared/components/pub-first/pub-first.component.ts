import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-pub-first',
  templateUrl: './pub-first.component.html',
  styleUrls: ['./pub-first.component.scss']
})
export class PubFirstComponent implements OnInit {

  constructor(private responsive: BreakpointObserver,
    @Inject(PLATFORM_ID) private platformId: any) {}

  mobile !: string;
  classer !: string; 
  
  ngOnInit () {
    if (isPlatformBrowser(this.platformId)) {
      if (window.screen.width <= 360) { // 768px portrait
       // this.mobile = true;
      }
    }

    this.responsive.observe([
      Breakpoints.XSmall,
      Breakpoints.HandsetLandscape])
      .subscribe(result => {
    
        const breakpoints = result.breakpoints;
    
        if (breakpoints[Breakpoints.XSmall]) {
          this.mobile = "./../../../../assets/images/school/visa_succes_short.webp";
          this.classer = "phone"
        }
        else {
          this.classer = "large"
          this.mobile = "./../../../../assets/images/school/visa_succes.webp";
        }
    
      });
  }
  
}
