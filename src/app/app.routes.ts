import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Categories } from './categories/categories';
import { Offers } from './offers/offers';

export const routes: Routes = [
 { path: 'home', component: Home },
  { path: 'categories', component: Categories },
  { path: 'offers', component: Offers },
  { path: '', redirectTo: 'home', pathMatch: 'full' } 
];
