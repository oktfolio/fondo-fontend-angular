import {AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';

const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less']
})
export class AvatarComponent implements OnInit {

  text = 'A';
  color: string = colorList[0];

  ngOnInit(): void {
    this.color = colorList[Math.floor(Math.random() * 4)];
  }
}
