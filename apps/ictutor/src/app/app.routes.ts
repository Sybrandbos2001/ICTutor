import { Route } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

export const appRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'landing' },
    {
        path: 'landing',
        pathMatch: 'full',
        component: LandingComponent,
      },
];
