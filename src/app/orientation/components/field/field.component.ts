import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { field } from 'src/app/core/model/field-model';
import { OrientationService } from '../../services/orientation.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldComponent {

  domaine$!: Observable<field[]>;

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
  

  constructor (private orientationService :OrientationService,
                private appRout : Router,
                private route: ActivatedRoute) {}

  ngOnInit():void {
    const userDomaineDegree = this.route.snapshot.queryParams['degree'];
    const userDomainecyti = this.route.snapshot.queryParams['cyti'];
    console.log(userDomaineDegree)
    this.domaine$ = this.orientationService.domaine$;

    if (userDomaineDegree && userDomainecyti === undefined) {
      this.orientationService.getDomaineFromServer(userDomaineDegree);
    } else if (userDomainecyti) {
      this.domaine$ = this.orientationService.getPartDomaine(userDomaineDegree, userDomainecyti);
    } else {
      this.orientationService.getDomaineFromServer('tous');
    }
  }

  setfiled(field : string) {
   const degree = this.route.snapshot.queryParams['degree'];
   const cyti = this.route.snapshot.queryParams['cyti'];
   if (degree  && cyti == undefined) {
      this.appRout.navigate(
        ['orientation/city/'],
        {queryParams: {field:field, degree:degree} }
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
