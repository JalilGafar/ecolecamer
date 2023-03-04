import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ecole } from '../../models/ecole.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-ecole-list',
  templateUrl: './ecole-list.component.html',
  styleUrls: ['./ecole-list.component.scss']
})
export class EcoleListComponent implements OnInit{

  loading$!: Observable<boolean>;
  ecoles$!: Observable<Ecole[]>;

  constructor(private adminService: AdminService,
              private appRout : Router) { }
              
  ngOnInit(): void {
    this.InitObservable();
    this.adminService.getEcoleFromServer();
  }

  private InitObservable(){
    this.loading$ = this.adminService.loading$;
    this.ecoles$ = this.adminService.ecoles$;
  }

  onRowSelect(event:any){
    this.appRout.navigateByUrl('admin/ecole/'+ event.data.id_ecol.toString());
  }

}
