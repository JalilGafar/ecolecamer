import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, filter, map, tap } from 'rxjs';
import { field } from 'src/app/core/model/field-model';
import { OrientationService } from '../../services/orientation.service';
import { Title } from '@angular/platform-browser';
import { TopNewsService } from 'src/app/services/top-news.service';
import { BEHAVIOR } from 'src/app/core/model/Behavior';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'   ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldComponent implements OnInit, AfterViewInit{

  domaine$!: Observable<field[]>;
  loading$!: Observable<boolean>;

  agri = {branche: 'Agriculture, Environnement'};
  art = {branche:'Art, Culture, Design, Mode'};
  beaute = {branche: 'Bien-être, Beauté'};
  commerce = {branche: 'Commerce, management'};
  droit = {branche: 'Droit, Sc. Politiques'};
  finance = {branche:'Finance, comptabilité'};
  public = {branche: 'Fonction publique'};
  tourisme = {branche: 'Hôtellerie, tourisme'};
  animation = {branche: 'Image, son, animation 2D/3D'};
  informatique = {branche: 'Informatique'};
  ingenierie = {branche: 'Ingénierie, Science'};
  langue = {branche: 'Langues et Sc. humaines'};
  marketing = {branche: 'Marketing, communication'};
  sante = {branche: 'santé'};
  sport = {branche: 'Sport, social, animation'};

  agriLenght!: number;
  artLenght!: number;
  beaLenght!: number;
  comLenght!: number;
  droLenght!: number;
  finLenght!: number;
  pubLenght!: number;
  tourLenght!: number;
  animLenght!: number;
  infoLenght!: number;
  ingLenght!: number;
  langLenght!: number;
  markLenght!: number;
  santLenght!: number;
  sporLenght!: number;


  constructor (private orientationService :OrientationService,
                private appRout : Router,
                private route: ActivatedRoute,
                private topNewsService : TopNewsService,
                private titleService:Title) {this.titleService.setTitle("quel sont les domaines de formation au Cameroun");}

  ngOnInit():void {
    const userDomaineDegree = this.route.snapshot.queryParams['degree'];
    const userDomainecyti = this.route.snapshot.queryParams['cyti'];
    //console.log(userDomaineDegree)
    this.loading$ = this.orientationService.loading$;
    this.domaine$ = this.orientationService.domaine$;

    if (userDomaineDegree && userDomainecyti === undefined) {
      this.orientationService.getDomaineFromServer(userDomaineDegree);
      this.domaine$.pipe(
        tap( data => {
          this.agriLenght = data.filter(x => x.branche_dom == this.agri.branche).length
          this.artLenght = data.filter(x => x.branche_dom == this.art.branche).length
          this.beaLenght = data.filter(x => x.branche_dom == this.beaute.branche).length
          this.comLenght = data.filter(x => x.branche_dom == this.commerce.branche).length
          this.droLenght = data.filter(x => x.branche_dom == this.droit.branche).length
          this.finLenght = data.filter(x => x.branche_dom == this.finance.branche).length
          this.pubLenght = data.filter(x => x.branche_dom == this.public.branche).length
          this.tourLenght = data.filter(x => x.branche_dom == this.tourisme.branche).length
          this.animLenght = data.filter(x => x.branche_dom == this.animation.branche).length
          this.infoLenght = data.filter(x => x.branche_dom == this.informatique.branche).length
          this.ingLenght = data.filter(x => x.branche_dom == this.ingenierie.branche).length
          this.langLenght = data.filter(x => x.branche_dom == this.langue.branche).length
          this.markLenght = data.filter(x => x.branche_dom == this.marketing.branche).length
          this.santLenght = data.filter(x => x.branche_dom == this.sante.branche).length
          this.sporLenght = data.filter(x => x.branche_dom == this.sport.branche).length
        }    
        )
      ).subscribe()
    } else if (userDomainecyti) {
      this.domaine$ = this.orientationService.getPartDomaine(userDomaineDegree, userDomainecyti);      
      this.domaine$.pipe(
        tap( data => {
          this.agriLenght = data.filter(x => x.branche_dom == this.agri.branche).length
          this.artLenght = data.filter(x => x.branche_dom == this.art.branche).length
          this.beaLenght = data.filter(x => x.branche_dom == this.beaute.branche).length
          this.comLenght = data.filter(x => x.branche_dom == this.commerce.branche).length
          this.droLenght = data.filter(x => x.branche_dom == this.droit.branche).length
          this.finLenght = data.filter(x => x.branche_dom == this.finance.branche).length
          this.pubLenght = data.filter(x => x.branche_dom == this.public.branche).length
          this.tourLenght = data.filter(x => x.branche_dom == this.tourisme.branche).length
          this.animLenght = data.filter(x => x.branche_dom == this.animation.branche).length
          this.infoLenght = data.filter(x => x.branche_dom == this.informatique.branche).length
          this.ingLenght = data.filter(x => x.branche_dom == this.ingenierie.branche).length
          this.langLenght = data.filter(x => x.branche_dom == this.langue.branche).length
          this.markLenght = data.filter(x => x.branche_dom == this.marketing.branche).length
          this.santLenght = data.filter(x => x.branche_dom == this.sante.branche).length
          this.sporLenght = data.filter(x => x.branche_dom == this.sport.branche).length
        }    
        )
      ).subscribe()

    } else {
      this.orientationService.getDomaineFromServer('tous');
    }
  }

  ngAfterViewInit(): void {
    this.topNewsService.scrollTo('header', BEHAVIOR.auto)
  }

  setNiveau(){}

  setfiled(field : string, branche : string) {
   const degree = this.route.snapshot.queryParams['degree'];
   const cyti = this.route.snapshot.queryParams['cyti'];
   if (degree  && cyti == undefined) {
      this.appRout.navigate(
        ['orientation/city/'],
        {queryParams: {field:field, branche:branche, degree:degree} }
      );
    } else if(degree  && cyti  ) {
      this.appRout.navigate(
        ['orientation/statuts/'],
        {queryParams: {degree:degree, field:field, cyti:cyti} }
      );
    } else {
      this.appRout.navigate(
        ['orientation/degree/'],
        {queryParams: {field:field} }
      );
    }
  }
}
