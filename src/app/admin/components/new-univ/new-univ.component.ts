import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-new-univ',
  templateUrl: './new-univ.component.html',
  styleUrls: ['./new-univ.component.scss']
})
export class NewUnivComponent implements OnInit{
  
  newUniv!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private adminService: AdminService,
              private appRout : Router){}
  
  ngOnInit(): void {
    this.newUniv = this.formBuilder.group({
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

  onSubmitForm() {
   // console.log(this.newUniv.value);
    this.adminService.addNewUniv(this.newUniv.value).subscribe();
    this.appRout.navigateByUrl('admin/adminStart');
}

}
