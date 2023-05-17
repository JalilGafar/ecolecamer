import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categ } from '../../models/categ.model';
import { Domaine } from '../../models/domaine.model';
import { Ecole } from '../../models/ecole.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-new-formation',
  templateUrl: './new-formation.component.html',
  styleUrls: ['./new-formation.component.scss']
})
export class NewFormationComponent implements OnInit{

  newFormation!:FormGroup;
  ecole$!: Observable<Ecole[]>;
  categ$!: Observable<Categ[]>;
  domaine$!: Observable<Domaine[]>;

  constructor(private formBuilder: FormBuilder,
              private adminService: AdminService,
              private appRout : Router){}


  ngOnInit(): void {
    this.newFormation = this.formBuilder.group({
      nom_f: [null],
      nom_dip: [null],
      admission_diplome: [null],
      descriptif_diplome: [null],
      condition_diplome: [null],
      niveau_diplome: [null],
      categ_id: [null],
      ecole_id: [null],
      domaine_id: [null],
      date_debut_f: [null],
      duree_f: [null],
      cout_f: [null],
      programme_f: [null],
      descriptif_f: [null],
    })

    this.adminService.getDomaineFromServer();
    this.adminService.getCategFromServer();
    this.adminService.getEcoleFromServer();
    this.domaine$ = this.adminService.domaine$;
    this.categ$ = this.adminService.categ$;
    this.ecole$ = this.adminService.ecoles$;
  }


  

  onSubmitForm(){
    this.adminService.addNewFormation(this.newFormation.value).subscribe();
    this.appRout.navigateByUrl('admin/adminStart');
  }
}
