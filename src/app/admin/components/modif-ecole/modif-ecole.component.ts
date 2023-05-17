import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, take, tap } from 'rxjs';
import { Campus } from '../../models/campus.mode';
import { Ecole } from '../../models/ecole.model';
import { Universite } from '../../models/univ.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-modif-ecole',
  templateUrl: './modif-ecole.component.html',
  styleUrls: ['./modif-ecole.component.scss']
})
export class ModifEcoleComponent implements OnInit{

  modifEcole!: FormGroup;
  ecole$!: Observable<Ecole>;
  universites$!: Observable <Universite[]>;
  campus$!: Observable<Campus[]>

  constructor ( private adminService : AdminService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private appRout: Router) {}

  ngOnInit(): void {
    this.ecole$ = this.route.params.pipe(
      switchMap(params => this.adminService.getEcoleById(+params['id'])),
      take(1),
      tap(val => {
        this.modifEcole.patchValue({
          id_ecol : val.id_ecol,
          nom_e: val.nom_e,
          sigle_e: val.sigle_e,
          logo_e: val.logo_e,
          niveau_e: val.niveau_e,
          langue_e: val.langue_e,
          date_creation: val.date_creation,
          tel_1_e: val.tel_1_e,
          email_e: val.email_e,
          bp_e: val.bp_e,
          directeur_e: val.directeur_e,
          photo_directeur: val.photo_directeur,
          mot_directeur: val.mot_directeur,
          stat_e: val.stat_e,
          descriptif_e: val.descriptif_e,
          image_e: val.image_e,
          universites_id: val.universites_id,
          });
        console.log(val.nom_e)
      })
    );

    this.modifEcole = this.formBuilder.group({
      id_ecol: [null],
      nom_e: [null],
      sigle_e: [null],
      logo_e: [null],
      niveau_e: [null],
      langue_e: [null],
      date_creation: [null],
      tel_1_e: [null],
      email_e: [null],
      bp_e: [null],
      directeur_e: [null],
      photo_directeur: [null],
      mot_directeur: [null],
      stat_e: [null],
      descriptif_e: [null],
      image_e: [null],
      universites_id: [null],
      campus_id: [null],
    });
    this.adminService.getUniversiteFromServer();
    this.universites$ = this.adminService.universite$;
    this.adminService.getCampusFromServer();
    this.campus$ = this.adminService.campus$;
  };

  onSubmitForm(){
    this.adminService.editEcole(this.modifEcole.value).subscribe();
    console.log(this.modifEcole.value);
    this.appRout.navigateByUrl('admin/adminStart');
  }

}
