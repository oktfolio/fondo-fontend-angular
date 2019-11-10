import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-profile-draw',
  templateUrl: './user-profile-drawer.component.html',
  styleUrls: ['./user-profile-drawer.component.less']
})
export class UserProfileDrawerComponent {

  data = [
    {
      name: 'Lily'
    },
    {
      name: 'Lily'
    }
  ];

  @Input() visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
