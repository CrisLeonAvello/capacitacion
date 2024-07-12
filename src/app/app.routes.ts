import { Routes } from '@angular/router';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';

export const routes: Routes = [
    {path: 'curriculum', component: CurriculumComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'galeria', component: GaleriaComponent},
];
