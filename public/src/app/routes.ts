import {Routes} from '@angular/router';
import {ProjectsComponent} from './projects/projects.component';

export const appRoutes: Routes = [
  {path: 'projects', component: ProjectsComponent},
  {path: '', redirectTo: 'admin', pathMatch: 'full'},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
];
