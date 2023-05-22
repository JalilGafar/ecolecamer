import { Component, OnInit } from '@angular/core';
import { tokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  currentUser : any;
  constructor(private tokenStorage: tokenStorageService) {}

  ngOnInit(): void {
    this.currentUser = this.tokenStorage.getUser();
  }

}
