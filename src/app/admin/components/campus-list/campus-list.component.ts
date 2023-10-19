import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Campus } from '../../models/campus.mode';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-campus-list',
  templateUrl: './campus-list.component.html',
  styleUrls: ['./campus-list.component.scss']
})
export class CampusListComponent implements OnInit{

  loading$!: Observable<boolean>;
  campus$!: Observable<Campus[]>;

  constructor(private adminService: AdminService,
    private appRout : Router) { }
      
  ngOnInit(): void {
  this.InitObservable();
  this.adminService.getCampusFromServer();
  }

  private InitObservable(){
  this.loading$ = this.adminService.loading$;
  this.campus$ = this.adminService.campus$;
  }

  onRowSelect(event:any){
  this.appRout.navigateByUrl('admin/campus/'+ event.data.id_camp.toString());
  }

  onAddCampus(){
    this.appRout.navigateByUrl('admin/new-campus');
  }

}
