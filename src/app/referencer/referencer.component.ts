import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

interface Categ {
  name: string;
  code: string
}

@Component({
  selector: 'app-referencer',
  templateUrl: './referencer.component.html',
  styleUrls: ['./referencer.component.scss']
})
export class ReferencerComponent implements OnInit{

  newEts!:FormGroup;
  categ !: Categ[];
  categorie!: string;
  stape1!: boolean;
  stape2!: boolean;
  stape3!: boolean;

  constructor(private formBuilder: FormBuilder,
              private approut : Router,
              private userService: UserService){}

  ngOnInit(): void {
    this.categ = [
      {name : 'centre de formation', code: 'centre'},
      {name : 'école', code: 'ecole'},
      {name : 'formateur indépendant', code: 'indep'},
      {name : 'Groupe de Prépa', code: 'prepa'},
      {name : 'à la recherche d\'une formation', code: 'candidat'}
    ];

    this.stape1 = true;
    this.stape2 = false;
    this.stape3 = false;
    this.newEts  = this.formBuilder.group({
      nom : [null, [Validators.required]],
      prenom: [null, [Validators.required]],
      etablissement: [null, [Validators.required]],
      ville: [null, [Validators.required]],
      comment: [null, [Validators.required]],
      email:  [null, [Validators.required]],
      phone: [null, [Validators.required]]
    })
  }

  onSubmitCateg(){
    this.stape1 = false;
    this.stape2 = true;
    console.log(this.categorie); 
    if (this.categorie == 'candidat') {
      this.approut.navigateByUrl('orientation/start/degree');
    }
  }
  onSubmitForm(){
    this.stape2= false;
    this.stape3=true;
   // console.log(this.newEts.value);
    this.userService.postEts(this.newEts.value).subscribe();
  }

}
