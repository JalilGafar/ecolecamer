import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headmsg',
  templateUrl: './headmsg.component.html',
  styleUrls: ['./headmsg.component.scss']
})
export class HeadmsgComponent implements OnInit{
  
  @Input() titre!: string;
  @Input() soustitre!: string;
  @Input() photo!: string;

  ngOnInit(): void {
  }

}
