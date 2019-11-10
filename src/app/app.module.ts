import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {RoutesModule} from './routes/routes.module';
import {FrameComponent} from './layout/frame/frame.component';
import {RouteRoutingModule} from './routes/routes-routing.module';
import {PassportComponent} from './layout/passport/passport.component';
import {WelcomeComponent} from './routes/welcome/welcome.component';
import {LoginComponent} from './routes/login/login.component';
import { UserComponent } from './routes/user/user.component';
import { CreateUserComponent } from './routes/create-user/create-user.component';
import { ResourceTreeComponent } from './resource-tree/resource-tree.component';
import { AvatarComponent } from './avatar/avatar.component';
import { RoleComponent } from './role/role.component';
import { GenderPipePipe } from './gender-pipe.pipe';
import { UserSelectorComponent } from './user-selector/user-selector.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { UserProfileDrawerComponent } from './user-profile-drawer/user-profile-drawer.component';
import { UserEditDrawerComponent } from './user-edit-drawer/user-edit-drawer.component';
import { RoleSelectComponent } from './role-select/role-select.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    PassportComponent,
    WelcomeComponent,
    LoginComponent,
    UserComponent,
    CreateUserComponent,
    ResourceTreeComponent,
    AvatarComponent,
    RoleComponent,
    GenderPipePipe,
    UserSelectorComponent,
    HeaderUserComponent,
    UserProfileDrawerComponent,
    UserEditDrawerComponent,
    RoleSelectComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    RoutesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouteRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
