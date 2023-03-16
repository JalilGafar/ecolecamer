import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Ecole } from '../../models/ecole.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-new-campus',
  templateUrl: './new-campus.component.html',
  styleUrls: ['./new-campus.component.scss']
})
export class NewCampusComponent implements OnInit {

  newCampus!: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
              private adminService: AdminService,
              private appRout : Router){}

  ngOnInit(): void {
    this.newCampus = this.formBuilder.group({
      nom_camp : [null],
      ville_cam : [null],
      principal_camp : [null],
      descriptif_camp : [null],
      lon_camp : [null],
      lat_camp : [null],
    });
  }

  onSubmitForm(){
    console.log(this.newCampus.value);
    this.adminService.addNewCampus(this.newCampus.value).subscribe();
    this.appRout.navigateByUrl('admin/adminStart');
  }

}
