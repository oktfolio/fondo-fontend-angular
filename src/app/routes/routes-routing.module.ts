import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {FrameComponent} from '../layout/frame/frame.component';
import {PassportComponent} from '../layout/passport/passport.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {UserComponent} from './user/user.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {ResourceTreeComponent} from '../resource-tree/resource-tree.component';

const routes: Routes = [
  {
    path: '',
    component: FrameComponent,
    children: [
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'user', component: UserComponent},
      {path: 'create-user', component: CreateUserComponent},
      {path: 'resource-tree', component: ResourceTreeComponent}
    ]
  },
  {
    path: 'passport',
    component: PassportComponent,
    children: [
      {path: 'login', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule {
}
