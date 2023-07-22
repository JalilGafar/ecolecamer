import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Campus } from '../../models/campus.mode';
import { Universite } from '../../models/univ.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-new-ecole',
  templateUrl: './new-ecole.component.html',
  styleUrls: ['./new-ecole.component.scss']
})
export class NewEcoleComponent implements OnInit {

  newEcole!: FormGroup;
  universites!: Universite[];
  selectedUniv!: Universite;
  universites$!: Observable <Universite[]>;
  campus$!: Observable<Campus[]>

  constructor(private formBuilder: FormBuilder,
              private adminService: AdminService,
              private appRout : Router){}

  ngOnInit(): void {
    this.newEcole = this.formBuilder.group({
      nom_e : [null],
      sigle_e : [null],
      logo_e : [null],
      niveau_e : [null],
      langue_e : [null],
      date_creation : [null],
      arrete_creation: [null],
      arrete_ouverture: [null],
      tel_1_e : [null],
      email_e : [null],
      siteweb_e : [null],
      bp_e : [null],
      directeur_e : [null],
      photo_directeur : [null],
      mot_directeur : [null],
      stat_e : [null],
      descriptif_e : [null],
      image_e : [null],
      universites_id : [null],
      campus_id : [null]
    });

    this.adminService.getUniversiteFromServer();
    this.universites$ = this.adminService.universite$;
    this.adminService.getCampusFromServer();
    this.campus$ = this.adminService.campus$;
  };

  onSubmitForm(){
    this.adminService.addNewEcole(this.newEcole.value).subscribe();
    this.appRout.navigateByUrl('admin/adminStart');
  }

}
