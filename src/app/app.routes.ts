import { Routes } from '@angular/router';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './galeria/galeria.component';

export const routes: Routes = [
    {path: 'curriculum', component: CurriculumComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'galeria', component: GaleriaComponent},
];
