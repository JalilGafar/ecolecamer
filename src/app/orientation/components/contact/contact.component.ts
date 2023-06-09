import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { preferredCountries } from 'ngx-mat-intl-tel-input'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  newContact!: FormGroup;
  // separateDialCode = true;
  // SearchCountryField = SearchCountryField;
  // CountryISO = CountryISO;
  // PhoneNumberFormat = PhoneNumberFormat;
 
  // preferredCountries: CountryISO[] = [CountryISO.UnitedStates, 
  //  CountryISO.UnitedKingdom];

  constructor(private formBuilder: FormBuilder,
              private appRout : Router) {}

  ngOnInit(): void {
    this.newContact  = this.formBuilder.group({
      nom : [null, [Validators.required]],
      prenom: [null, [Validators.required]],
      born: [null, [Validators.required]], 
      pays:  [null, [Validators.required]],
      email:  [null, [Validators.required]],
      phone: new FormControl(null, [Validators.required]),
     // phone: [null, [Validators.required]]
    })
  }

  onSubmitForm(){
    console.log(this.newContact.value)
  }

}
