import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from './users/users.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes : Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : "full"
  },
  {
    path : 'users',
    component : UsersComponent,
    children : [
      {
        path : ':id',
        component : UserComponent
      }
    ]
  },
  {
    path : 'servers',
    component : ServersComponent,
    children : [
      {
        path : ':id',
        component : ServerComponent
      }
    ]
  },
  {
    path : "not-found",
    component : NotFoundComponent
  },
  {
    path : '**',
    redirectTo : 'not-found'
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    ServerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ServersService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
