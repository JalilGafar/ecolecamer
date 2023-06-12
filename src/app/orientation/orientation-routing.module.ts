import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DegreeComponent } from "../orientation/components/degree/degree.component";
import { FieldComponent } from "../orientation/components/field/field.component";
import { CityComponent } from "./components/city/city.component";
import { StatutsComponent } from "./components/statuts/statuts.component";
import { ClasseComponent } from "./components/classe/classe.component";
import { EtudiantComponent } from "./components/etudiant/etudiant.component";
import { DernierDiplomeComponent } from "./components/dernier-diplome/dernier-diplome.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ResultatsComponent } from "./components/resultats/resultats.component";

const routes: Routes = [
    { path: 'start/degree', component: DegreeComponent},
    //{ path: 'degree/:degreeCyti', component: DegreeComponent},
    { path: 'degree', component: DegreeComponent},
    { path: 'domaines', component: FieldComponent},
    { path: 'city', component: CityComponent},
    { path: 'classe', component: ClasseComponent },
    {path: 'etudiant', component: EtudiantComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'resultats', component: ResultatsComponent},
    {path: 'dernierDiplome', component: DernierDiplomeComponent},
    //{ path: 'field', component: FieldComponent},
    { path: 'start/field', component: FieldComponent},
    { path: 'start/city', component: CityComponent},
    { path: 'statuts', component: StatutsComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class OrientationRoutingModule {}