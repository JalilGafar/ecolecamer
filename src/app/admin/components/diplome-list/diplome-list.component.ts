import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { Diplome } from '../../models/diplome.model';

@Component({
  selector: 'app-diplome-list',
  templateUrl: './diplome-list.component.html',
  styleUrls: ['./diplome-list.component.scss', '../../admin-style.module.scss']
})
export class DiplomeListComponent implements OnInit{

  loading$!: Observable<boolean>;
  diplomes$!: Observable<Diplome[]>;

  constructor(private adminService: AdminService,
              private appRout : Router) { }
              
  ngOnInit(): void {
    this.InitObservable();
    this.adminService.getDiplomeFromServer();
  }

  private InitObservable(){
    this.loading$ = this.adminService.loading$;
    this.diplomes$ = this.adminService.diplomes$;
  }

  onRowSelect(event:any){
    this.appRout.navigateByUrl('admin/diplome/'+ event.data.id_dip.toString());
  }

  onAdddiplome(){
    this.appRout.navigateByUrl('admin/new-diplome');
  }

}
