import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.scss']
})
export class BoardModeratorComponent implements OnInit{

  content!: string;

  constructor(private userservice: UserService){ }

  ngOnInit(): void {
    this.userservice.getModeratorBoard().subscribe(
      data => {
        this.content = data
      },
      err =>{
        this.content = JSON.parse(err.error).message;
      }
    )
  }

}
