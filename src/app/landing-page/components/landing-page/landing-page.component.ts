import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { counter } from 'src/app/core/model/counter-model';
import { TopNewsService } from 'src/app/services/top-news.service';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  count!: number;
 // counter = document.querySelector('.counter');
  counti = 0 ;
  speed = 200; // The lower the slower

  constructor( private service:TopNewsService,
              private el: ElementRef,
              private titleService:Title,
              private meta: Meta){this.titleService.setTitle("Formations Professionnelles au Cameroun | Camerdiplome");
                                  this.meta.addTags([ 
                                    { name: 'description', content: 'Trouvez le diplôme et l\'école de formation qui vous correspondent le mieux.' }, 
                                    { name: 'keywords', content: 'formation, professionnelle, ecoles, Cameroun, bts, licence, master' } 
                                  ]);
                                }

  ngOnInit(): void {
    
    this.service.countFormation().pipe(
      map(data => {
        this.count = data[0].cont;
        //this.updateCount(this.count, this.counti, this.speed)
        const updateCounto = () =>{
          const target = +this.count;
          const counta = +this.counti 
          const inc = target / this.speed;
          if (counta < target) {
            // Add inc to count and output in counter
            //console.log(counta +' Je SUIS '+ target)
            this.counti = ~~ (counta + inc);
            // Call function every ms
            setTimeout(updateCounto, 1);
          } else {
            this.counti = target;
          }
        }
        updateCounto()
      })        
    ).subscribe();

    //setTimeout(this.updateCount, 3000);

    
    
  }
  
  

  
}

