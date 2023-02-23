import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { field } from 'src/app/core/model/field-model';
import { OrientationService } from '../../services/orientation.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
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
  sante = {branche: 'Santé'};
  sport = {branche: 'Sport, social, animation'};
  

  constructor (private orientationService :OrientationService,
                private appRout : Router) {}

  ngOnInit():void {
    this.domaine$ = this.orientationService.getAllDomaine();
    
  }

}
