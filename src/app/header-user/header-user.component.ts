import {Component, Inject, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-header-user',
  template: `
      <div
              class="d-flex align-items-center px-sm"
              nz-dropdown
              nzPlacement="bottomRight"
              [nzDropdownMenu]="userMenu"
      >
          <nz-avatar [nzSrc]="" nzSize="small" class="mr-sm"></nz-avatar>
          用户名
      </div>
      <nz-dropdown-menu #userMenu="nzDropdownMenu">
          <div nz-menu class="width-sm">
              <div nz-menu-item routerLink="/pro/account/center">
                  <i nz-icon nzType="user" class="mr-sm"></i>
                  用户中心
              </div>
              <div nz-menu-item routerLink="/pro/account/settings">
                  <i nz-icon nzType="setting" class="mr-sm"></i>
                  设置
              </div>
              <div nz-menu-item routerLink="/exception/trigger">
                  <i nz-icon nzType="close-circle" class="mr-sm"></i>
                  triggrt
              </div>
              <li nz-menu-divider></li>
              <div nz-menu-item (click)="logout()">
                  <i nz-icon nzType="logout" class="mr-sm"></i>
                  登出
              </div>
          </div>
      </nz-dropdown-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUserComponent {
  constructor() {
  }

  logout() {
  }
}
