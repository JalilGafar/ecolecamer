import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, take, tap } from 'rxjs';
import { Categ } from '../../models/categ.model';
import { Domaine } from '../../models/domaine.model';
import { Ecole } from '../../models/ecole.model';
import { Formation } from '../../models/formation.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-modif-formation',
  templateUrl: './modif-formation.component.html',
  styleUrls: ['./modif-formation.component.scss', '../../admin-style.module.scss']
})
export class ModifFormationComponent implements OnInit{

  modifFormation!: FormGroup;
  formation$!: Observable<Formation>;
  ecole$!: Observable<Ecole[]>;
  categ$!: Observable<Categ[]>;
  domaine$!: Observable<Domaine[]>;

  constructor ( private adminService : AdminService,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder,
                private appRout: Router) {}


  ngOnInit(): void {
    this.modifFormation = this.formBuilder.group({
      id_form: [null],
      nom_f: [null],
      nom_dip: [null],
      diplome_id: [null, [Validators.required]],
      admission_diplome: [null],
      descriptif_dip: [null],
      condition_diplome: [null],
      niveau_diplome: [null],
      categ_id: [null, [Validators.required]],
      ecole_id: [null, [Validators.required]],
      domaine_id: [null, [Validators.required]],
      date_debut_f: [null],
      duree_f: [null],
      cout_f: [null],
      programme_f: [null],
      descriptif_f: [null],
    });

    this.formation$ = this.route.params.pipe(
      switchMap(params => this.adminService.getFormationById(+params['id'])),
      //take(1),
      tap(val => {
        this.modifFormation.patchValue({
          id_form : val.id_form,
          nom_f : val.nom_f,
          nom_dip: val.nom_dip,
          date_debut_f: val.date_debut_f,
          duree_f: val.duree_f,
          cout_f: val.cout_f,
          programme_f: val.programme_f,
          descriptif_f: val.descriptif_f,
          admission_diplome: val.admission_diplome,
          condition_diplome: val.condition_diplome,
          niveau_diplome : val.niveau_diplome,
          descriptif_dip: val.descriptif_dip,
          diplome_id: val.diplome_id,
          categorie_id: val.categorie_id,
          ecole_id : val.ecole_id,
        })
      })
    );


    this.adminService.getDomaineFromServer();
    this.adminService.getCategFromServer();
    this.adminService.getEcoleFromServer();
    this.domaine$ = this.adminService.domaine$;
    this.categ$ = this.adminService.categ$;
    this.ecole$ = this.adminService.ecoles$;
    

  }

  onSubmitForm(){
    if (this.modifFormation.invalid) {
       return;
     }
    this.adminService.editFormation(this.modifFormation.value).subscribe();
    console.log(this.modifFormation.value);
    this.appRout.navigateByUrl('admin/adminStart');

  }

  onReturn(){
    this.appRout.navigateByUrl('admin/adminStart');
  }

}
