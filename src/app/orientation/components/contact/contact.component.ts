import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrientationService } from '../../services/orientation.service';
import { Contact } from 'src/app/core/model/contact-model';
import { SelectItem } from 'primeng/api';
//import { preferredCountries } from 'ngx-mat-intl-tel-input'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  newContact!: FormGroup  ;
  items!: SelectItem[];
  selectedItem!: string;
  // separateDialCode = true;
  // SearchCountryField = SearchCountryField;
  // CountryISO = CountryISO;
  // PhoneNumberFormat = PhoneNumberFormat;
 
  // preferredCountries: CountryISO[] = [CountryISO.UnitedStates, 
  //  CountryISO.UnitedKingdom];

  constructor(private formBuilder: FormBuilder,
              private orientationService: OrientationService,
              private appRout : Router) {
                this.items = [];
                for (let i = 1970; i < 2010; i++) {
                    this.items.push({ label:''+ i, value:  i });
                }
              }

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
    this.orientationService.saveContact(this.newContact.value);
    this.appRout.navigate( ['orientation/resultats/'] );
    // console.log(this.newContact.value)
  }

}
