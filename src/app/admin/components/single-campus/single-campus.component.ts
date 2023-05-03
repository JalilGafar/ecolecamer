import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { Campus } from '../../models/campus.mode';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-single-campus',
  templateUrl: './single-campus.component.html',
  styleUrls: ['./single-campus.component.scss']
})
export class SingleCampusComponent implements OnInit {

  loading$!: Observable<boolean>;
  campus$!: Observable<Campus>;
  campus!: Campus;

  constructor(private adminService : AdminService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.initObservables ()
  }

  initObservables(){
    this.loading$ = this.adminService.loading$;
    this.campus$ = this.route.params.pipe(
      switchMap(params => this.adminService.getCampusById(+params['id'])),
      tap(campus=>this.campus = campus)
    );
    console.log(this.campus)
  }

  onModif(){
    this.router.navigateByUrl('admin/modif-campus/'+ this.campus.id_camp.toString())    
  }

  onDelet(){
    this.adminService.deletCampusById(this.campus.id_camp).subscribe();
    this.router.navigateByUrl('/admin/adminStart')
  }

  onGoBack(){
    this.router.navigateByUrl('/admin/adminStart')
  }
}
