import { Routes } from '@angular/router';
import { Ejercicio2 } from './views/ejercicio2/ejercicio2';
import { Ejercicio3 } from './views/ejercicio3/ejercicio3';
import { Ejercicio4 } from './views/ejercicio4/ejercicio4';


export const routes: Routes = [
    {path: '', redirectTo: 'view1', pathMatch: 'full'},
    {path: 'view1', component: Ejercicio2},
    {path: 'view2', component: Ejercicio3},
    {path: 'view3', component: Ejercicio4}
];
