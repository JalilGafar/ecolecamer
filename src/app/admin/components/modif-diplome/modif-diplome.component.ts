import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, switchMap, take, tap } from 'rxjs';
import { Diplome } from '../../models/diplome.model';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categ } from '../../models/categ.model';
import { Domaine } from '../../models/domaine.model';

@Component({
  selector: 'app-modif-diplome',
  templateUrl: './modif-diplome.component.html',
  styleUrls: ['./modif-diplome.component.scss' ]
})
export class ModifDiplomeComponent implements OnInit{

  modifDiplome!: FormGroup;
  diplome$!: Observable<Diplome>;
  dipPrev!: Diplome;
  categorie$!: Observable<Categ[]>;
  domaine$!: Observable<Domaine[]>;

  constructor ( private adminService : AdminService,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder,
                private appRout: Router) {}

  ngOnInit(): void {
    this.diplome$ = this.route.params.pipe(
      switchMap(params => this.adminService.getDiplomeById(+params['id'])),
      take(1),
      tap(val => {
        this.modifDiplome.patchValue({
            id_dip: val.id_dip,
            nom_dip: val.nom_dip,
            descriptif_dip: val.descriptif_dip,
            niveau: val.niveau,
            categorie_id: val.categorie_id
          });
        console.log(val.nom_dip)
      })
    );

    this.modifDiplome = this.formBuilder.group({
      id_dip: [null],
      nom_dip: [null],
      descriptif_dip: [null],
      niveau: [null],
      domaine_id: [null, [Validators.required]],
      domaine_id2: [null],
      domaine_id3: [null],
      categorie_id: [null]
    });

    this.adminService.getDomaineFromServer();
    this.domaine$ = this.adminService.domaine$;
    this.adminService.getCategFromServer();
    this.categorie$ = this.adminService.categ$;
  };

  onSubmitForm(){
    this.adminService.editDiplome(this.modifDiplome.value).subscribe();
    console.log(this.modifDiplome.value)
    this.appRout.navigateByUrl('admin/adminStart');
  }

  onReturn(){
    this.appRout.navigateByUrl('admin/adminStart');
  }
}
