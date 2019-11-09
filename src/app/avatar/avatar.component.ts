import {Component} from '@angular/core';

const userList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less']
})
export class AvatarComponent {

  text: string = userList[3];
  color: string = colorList[3];

  change(): void {
    let idx = userList.indexOf(this.text);
    ++idx;
    if (idx === userList.length) {
      idx = 0;
    }
    this.text = userList[idx];
    this.color = colorList[idx];
  }

}
