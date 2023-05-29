import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InfoDiplomeComponent } from "./components/info-diplome/info-diplome.component";
import { InfoBacProComponent } from "./components/info-bac-pro/info-bac-pro.component";
import { InfoCapComponent } from "./components/info-cap/info-cap.component";
import { InfoBtsComponent } from "./components/info-bts/info-bts.component";
import { InfoPrepaComponent } from "./components/info-prepa/info-prepa.component";
import { InfoDutComponent } from "./components/info-dut/info-dut.component";
import { InfoButComponent } from "./components/info-but/info-but.component";
import { InfoBachelorComponent } from "./components/info-bachelor/info-bachelor.component";
import { InfoLicenceComponent } from "./components/info-licence/info-licence.component";
import { InfoLicenceProComponent } from "./components/info-licence-pro/info-licence-pro.component";
import { InfoMasterComponent } from "./components/info-master/info-master.component";
import { InfoEcoleComponent } from "./components/info-ecole/info-ecole.component";
import { InfoFormationComponent } from "./components/info-formation/info-formation.component";
import { InfoMetierComponent } from "./components/info-metier/info-metier.component";


const routes: Routes = [
    { path: 'diplomes', component:InfoDiplomeComponent},
    { path: 'bacPro', component:InfoBacProComponent},
    { path: 'cap', component:InfoCapComponent},
    { path: 'bts', component:InfoBtsComponent},
    { path: 'prepa', component:InfoPrepaComponent},
    { path: 'dut', component:InfoDutComponent},
    { path: 'but', component:InfoButComponent},
    { path: 'bachelor', component:InfoBachelorComponent},
    { path: 'licence', component:InfoLicenceComponent},
    { path: 'licencePro', component:InfoLicenceProComponent},
    { path: 'master', component:InfoMasterComponent},
    { path: 'ecole', component:InfoEcoleComponent},
    { path: 'filiere', component:InfoFormationComponent},
    { path: 'metier', component:InfoMetierComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InfoRoutingModule {}