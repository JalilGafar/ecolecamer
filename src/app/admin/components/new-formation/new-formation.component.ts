import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Domaine } from '../../models/domaine.model';
import { Ecole } from '../../models/ecole.model';
import { AdminService } from '../../services/admin.service';
import { Diplome } from '../../models/diplome.model';
import { Formation } from '../../models/formation.model';

@Component({
  selector: 'app-new-formation',
  templateUrl: './new-formation.component.html',
  styleUrls: ['./new-formation.component.scss']
})
export class NewFormationComponent implements OnInit, OnDestroy{

  newFormation!:FormGroup;
  ecole$!: Observable<Ecole[]>;
  diplomes$!: Observable<Diplome[]>;
  domaine$!: Observable<Domaine[]>;

  constructor(private formBuilder: FormBuilder,
              private adminService: AdminService,
              private appRout : Router){}


  ngOnInit(): void {
    this.newFormation = this.formBuilder.group({
      id_form: [null],
      nom_f: [null],
      admission_diplome: [null],
      condition_diplome: [null],
      diplom_id: [null, [Validators.required]],
      ecole_id: [null, [Validators.required]],
      domaine_id: [null, [Validators.required]],
      date_debut_f: [null],
      duree_f: [null],
      cout_f: [null],
      programme_f: [null],
      descriptif_f: [null],
    })

    this.adminService.getDomaineFromServer();
    this.adminService.getDiplomeFromServer();
    this.adminService.getEcoleFromServer();
    this.domaine$ = this.adminService.domaine$;
    this.diplomes$ = this.adminService.diplomes$;
    this.ecole$ = this.adminService.ecoles$;
  }


  

  onSubmitForm(){
    if (this.newFormation.invalid) {
      return;
    }
    this.adminService.addNewFormation(this.newFormation.value).pipe(take(1)).subscribe();
    this.appRout.navigateByUrl('admin/adminStart');
  }

  ngOnDestroy() {
   // this.adminService.addNewFormation(this.newFormation.value).unsubscribe(); // Unsubscribe Observable 1
}
  onGoBack(){
    this.appRout.navigateByUrl('/admin/adminStart')
  }
}
