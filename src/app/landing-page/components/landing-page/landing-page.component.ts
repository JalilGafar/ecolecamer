import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { counter } from 'src/app/core/model/counter-model';
import { TopNewsService } from 'src/app/services/top-news.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  count!: number;

  constructor( private service:TopNewsService){}

  ngOnInit(): void {
    this.service.countFormation().pipe(
      map(data => {
        this.count = data[0].cont
      })
    ).subscribe()
  }
}
