import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

export const routes: Routes = [
    { path: "", component: LandingPageComponent},
    { path: "menu", component: MenuPageComponent }
];
