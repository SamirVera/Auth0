import { Routes } from '@angular/router';

import { AuthGuard } from './services/auth.guard';

import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { CallbackComponent } from './components/callback/callback.component';
export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'precios', component: PreciosComponent },
    {
        path: 'protegida',
        component: ProtegidaComponent,
        canActivate: [AuthGuard]
    },
    { path: 'callback', component: CallbackComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];