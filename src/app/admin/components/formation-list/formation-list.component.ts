import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formation } from '../../models/formation.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.scss', '../../admin-style.module.scss']
})
export class FormationListComponent implements OnInit{

  loading$!: Observable<boolean>;
  formations$!:Observable<Formation[]>;
  formations!: Formation[];

  constructor(private adminService: AdminService,
              private appRout : Router) { }
  
  ngOnInit(): void {
    this.InitObservable();
    this.adminService.getFormationsFromServer();
  }

  private InitObservable(){
    this.loading$ = this.adminService.loading$;
    this.formations$ = this.adminService.formation$;
  }

  onRowSelect(event:any){
    this.appRout.navigateByUrl('admin/formation/'+ event.data.id_form.toString());
  }

  onAddFormation(){
    this.appRout.navigateByUrl('admin/new-formation');
  }

}
