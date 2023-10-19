import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { Formation } from '../../models/formation.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-single-formation',
  templateUrl: './single-formation.component.html',
  styleUrls: ['./single-formation.component.scss' ]
})
export class SingleFormationComponent implements OnInit{

  loading$!: Observable<boolean>;
  formation$!: Observable<Formation>;
  formation!: Formation;
  universite!: string;
  campus!: string;

  constructor(private adminService : AdminService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.initObservables ()
  }

  initObservables(){
    this.loading$ = this.adminService.loading$;
    this.formation$ = this.route.params.pipe(
      switchMap(params => this.adminService.getFormationById(+params['id'])),
      tap(formation => this.formation = formation)
    );
    console.log(this.formation);
  }

  onModif(){
    this.router.navigateByUrl('admin/modif-formation/'+ this.formation.id_form.toString())    
  }

  onDelet(){
    this.adminService.deletFormationById(this.formation.id_form).subscribe();
    this.router.navigateByUrl('/admin/adminStart')
  }

  onGoBack(){
    this.router.navigateByUrl('/admin/adminStart')
  }

}


