import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Universite } from '../../models/univ.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-modif-univ',
  templateUrl: './modif-univ.component.html',
  styleUrls: ['./modif-univ.component.scss']
})
export class ModifUnivComponent implements OnInit{
  
  modifUniv!: FormGroup;
  universite$!: Observable<Universite>;
  text1: string = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';

  constructor ( private adminService : AdminService,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {

    this.universite$ = this.route.params.pipe(
      switchMap(params => this.adminService.getUniversiteById(+params['id']))
    );
    this.modifUniv = this.formBuilder.group({
      nom_univ: [null],
      sigle_univ: [null],
      type_univ: [null],
      ville_univ: [null],
      tel_univ: [null],
      email_univ: [null],
      siteweb_univ: [null],
      recteur_univ: [null],
      mot_du_recteur: [null],
      descriptif_univ: [null],
    })
  }

  onSubmitForm(){

  }




}
