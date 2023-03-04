import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Universite } from '../../models/univ.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-single-univ',
  templateUrl: './single-univ.component.html',
  styleUrls: ['./single-univ.component.scss']
})
export class SingleUnivComponent implements OnInit {

  loading$!: Observable<boolean>;
  universite$!: Observable<Universite>;

  constructor(private adminService : AdminService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.initObservables ()
  }

  initObservables(){
    this.loading$ = this.adminService.loading$;
    this.universite$ = this.route.params.pipe(
      switchMap(params => this.adminService.getUniversiteById(+params['id']))
    );
  }

  onModif(){
    this.universite$.pipe(
      switchMap(universite => this.router.navigateByUrl('admin/modif-univ/'+ universite.id_univ.toString()))
    ).subscribe()
    
  }

  onDelet(){}

  onGoBack(){
    this.router.navigateByUrl('/admin/adminStart')
  }

}
