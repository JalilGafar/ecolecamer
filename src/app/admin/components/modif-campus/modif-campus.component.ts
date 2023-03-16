import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, take, tap } from 'rxjs';
import { Campus } from '../../models/campus.mode';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-modif-campus',
  templateUrl: './modif-campus.component.html',
  styleUrls: ['./modif-campus.component.scss']
})
export class ModifCampusComponent implements OnInit{

  modifCamp!: FormGroup;
  campus$!: Observable<Campus>;
  campPrev!: Campus;

  constructor ( private adminService : AdminService,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.campus$ = this.route.params.pipe(
      switchMap(params => this.adminService.getCampusById(+params['id'])),
      take(1),
      tap(val => {
        this.modifCamp.patchValue({
            id_camp: val.id_camp,
            nom_camp: val.nom_camp,
            ville_cam: val.ville_cam,
            principal_camp: val.principal_camp,
            lon_camp: val.lon_camp,
            lat_camp: val.lat_camp,
            descriptif_camp: val.descriptif_camp,
          });
        console.log(val.nom_camp)
      })
    );

    this.modifCamp = this.formBuilder.group({
      id_camp: [null],
      nom_camp: [null],
      ville_cam: [null],
      principal_camp: [null],
      lon_camp: [null],
      lat_camp: [null],
      descriptif_camp: [null]
    });
  };

  onSubmitForm(){
    this.adminService.editUniv(this.modifCamp.value).subscribe();
    console.log(this.modifCamp.value)
  }
}
