import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DegreeComponent } from "../orientation/components/degree/degree.component";
import { FieldComponent } from "../orientation/components/field/field.component";
import { CityComponent } from "./components/city/city.component";

const routes: Routes = [
    { path: 'degree', component: DegreeComponent},
    { path: 'field', component: FieldComponent},
    { path: 'city', component: CityComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class OrientationRoutingModule {}