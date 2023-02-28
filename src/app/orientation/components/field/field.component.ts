import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
    this.domaine$ = this.orientationService.domaine$;

    if (userDomaineDegree) {
      this.orientationService.getDomaineFromServer(userDomaineDegree);
      //this.domaine$ = this.orientationService.getDomaine(userDomaineDegree);
    } else {
      this.orientationService.getDomaineFromServer('tous');
      //this.domaine$ = this.orientationService.getDomaine('tous');
    }
  }

  setfiled(field : string) {
    this.orientationService.saveField(field);
    if (this.orientationService.initialUser.degree !=='' && this.orientationService.initialUser.city ==='') {
      this.appRout.navigate(
        ['orientation/city/'],
        {queryParams: {domaine:field} }
      );
    } else if(this.orientationService.initialUser.degree !=='' && this.orientationService.initialUser.city !=='' ) {
      this.appRout.navigate(
        ['orientation/statuts/'],
        //{queryParams: {degreeCyti:val} }
      );
    } else {
      this.appRout.navigate(
        ['orientation/degree/'],
        {queryParams: {domaine:field} }
      );
    }
  }
}
