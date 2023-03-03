import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Universite } from '../../models/univ.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-univ-list',
  templateUrl: './univ-list.component.html',
  styleUrls: ['./univ-list.component.scss']
})
export class UnivListComponent implements OnInit {

  loading$!: Observable<boolean>;
  universites$!: Observable<Universite[]>

  constructor(private adminService: AdminService,
              private appRout : Router) { }
  
  
  ngOnInit(): void {
    this.InitObservable();
    this.adminService.getUniversiteFromServer();
  }

  private InitObservable () {
    this.loading$ = this.adminService.loading$;
    this.universites$ = this.adminService.universite$;
  }

  onRowSelect(event:any){
    this.appRout.navigateByUrl('admin/universite/'+ event.data.id_univ.toString());
  }

}
