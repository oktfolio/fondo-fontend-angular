import {Component} from '@angular/core';

@Component({
  selector: 'app-user-edit-drawer',
  templateUrl: './user-edit-drawer.component.html',
  styleUrls: ['./user-edit-drawer.component.less']
})
export class UserEditDrawerComponent {
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
