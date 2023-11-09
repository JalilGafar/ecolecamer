import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { tokenStorageService } from './services/token-storage.service';
import { environment } from 'src/environments/environment';
import { Location, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  providers: [Location],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  private roles!: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username!:string;
  title = 'ecolecamer';
  location!: Location;

  constructor (private tokenStorageService: tokenStorageService, 
    location: Location,
    @Inject(PLATFORM_ID) private platformId: any) { this.location = location;}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (environment.production) {
      if (location.protocol === 'http:') {
        if (isPlatformBrowser(this.platformId)) {
          window.location.href = location.href.replace('http', 'https');
        }
      }
    }

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
      
    }

  }

  logout(){
    this.tokenStorageService.signOut();
    if (isPlatformBrowser(this.platformId)) {
      window.location.reload();
    }
  }

}
