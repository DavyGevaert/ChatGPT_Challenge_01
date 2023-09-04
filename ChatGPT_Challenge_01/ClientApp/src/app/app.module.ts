import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SearchTasksComponent } from './search-tasks/search-tasks.component';
import { DetailsTaskComponent } from './details-task/details-task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { CustomDatePipe } from './date/custom-date-pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SearchTasksComponent,
    DetailsTaskComponent,
    CreateTaskComponent,
    CustomDatePipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: SearchTasksComponent, pathMatch: 'full' },
      { path: 'search-tasks', component: SearchTasksComponent },
      { path: 'details-task/:Id', component: DetailsTaskComponent },
      { path: 'create-task', component: CreateTaskComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
