import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Categ } from '../../models/categ.model';
import { Observable } from 'rxjs';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-diplome',
  templateUrl: './new-diplome.component.html',
  styleUrls: ['./new-diplome.component.scss', '../../admin-style.module.scss']
})
export class NewDiplomeComponent implements OnInit {

  newDiplome!: FormGroup;
  categories!: Categ[];
  selectedCateg!: Categ;
  categorie$!: Observable <Categ[]>;

  constructor(private formBuilder: FormBuilder,
              private adminService: AdminService,
              private appRout : Router){}

  ngOnInit(): void {
    this.newDiplome = this.formBuilder.group({
      id_dip: [null],
      nom_dip: [null],
      descriptif_dip: [null],
      niveau: [null],
      categorie_id: [null]
    });

    this.adminService.getCategFromServer();
    this.categorie$ = this.adminService.categ$;
  };

  onSubmitForm(){
    this.adminService.addNewDiplome(this.newDiplome.value).subscribe();
    this.appRout.navigateByUrl('admin/adminStart');
  }

  onReturn(){
    this.appRout.navigateByUrl('admin/adminStart');
  }
}
