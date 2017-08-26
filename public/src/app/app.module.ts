import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';

import {appRoutes} from './routes';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AdminModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
