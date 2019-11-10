import {Component, OnInit} from '@angular/core';
import {TransferItem} from 'ng-zorro-antd/transfer';


@Component({
  selector: 'app-role-select',
  templateUrl: './role-select.component.html',
  styleUrls: ['./role-select.component.less'],
})
export class RoleSelectComponent implements OnInit {
  list: TransferItem[] = [];
  disabled = false;
  showSearch = true;

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.list.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 4 === 0,
        tag: ['cat', 'dog', 'bird'][i % 3]
      });
    }

    [2, 3].forEach(idx => (this.list[idx].direction = 'right'));
  }

  convertItems(items: TransferItem[]): TransferItem[] {
    return items.filter(i => !i.hide);
  }

  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('nzChange', ret);
  }
}
