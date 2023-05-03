import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMap, delay, map, Observable, switchMap, tap } from 'rxjs';
import { Ecole } from '../../models/ecole.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-single-ecole',
  templateUrl: './single-ecole.component.html',
  styleUrls: ['./single-ecole.component.scss']
})
export class SingleEcoleComponent implements OnInit {

  loading$!: Observable<boolean>;
  ecole$!: Observable<Ecole>;
  ecole!: Ecole;
  universite!:string;

  constructor(private adminService : AdminService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.initObservables ()
    
  }

  initObservables(){
    this.loading$ = this.adminService.loading$;
    this.ecole$ = this.route.params.pipe(
      switchMap(params => this.adminService.getEcoleById(+params['id'])),
      tap(ecol=>this.ecole = ecol)
    );
    this.adminService.universite$.pipe(
      delay(1000),
      map(univs => univs.filter(univ => univ.id_univ === this.ecole.universites_id)[0]),
      tap(univ =>{ 
        this.universite = univ.nom_univ;
        console.log(this.universite)
      })
    ).subscribe()
  }

  onModif(){
    this.router.navigateByUrl('admin/modif-ecole/'+ this.ecole.id_ecol.toString())    
  }

  onDelet(){
    this.adminService.deletEcoleById(this.ecole.id_ecol).subscribe();
    this.router.navigateByUrl('/admin/adminStart')
  }

  onGoBack(){
    this.router.navigateByUrl('/admin/adminStart')
  }
}
