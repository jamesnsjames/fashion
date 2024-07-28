import { Routes } from '@angular/router';
import { ModelsComponent } from './pages/models/models.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

export const routes: Routes = [{path:"models",component:ModelsComponent},
    {path:"",component:HomeComponent},
    {path:'contactus',component:ContactusComponent}

];
