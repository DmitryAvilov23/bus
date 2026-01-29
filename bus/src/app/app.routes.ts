import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./home/home.component').then((m) => m.HomeComponent)
    }
];
