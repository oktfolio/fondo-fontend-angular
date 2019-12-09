import {Component, OnInit} from '@angular/core';
import {TransferItem} from 'ng-zorro-antd/transfer';

interface Role {
  id: number;
  name: string;
  code: string;
  description: string;
  status: number;
}

@Component({
  selector: 'app-role-select',
  templateUrl: './role-select.component.html',
  styleUrls: ['./role-select.component.less'],
})
export class RoleSelectComponent implements OnInit {
  listRole: Role[] = [{
    id: 1,
    name: '超级管理员',
    code: 'SUPER_ADMIN',
    description: '超级管理员',
    status: 1
  }, {
    id: 2,
    name: '系统管理员',
    code: 'ADMIN',
    description: '系统超级管理员',
    status: 1
  }, {
    id: 2,
    name: '系统管理员系统管理员',
    code: 'ADMINADMIN',
    description: '系统超级管理员系统超级管理员',
    status: 1
  }, {
    id: 2,
    name: '系统管理员系统管理员系统管理员系统管理员',
    code: 'ADMINADMINADMIN',
    description: '系统超级管理员系统超级管理员系统超级管理员',
    status: 1
  }, {
    id: 2,
    name: '系统管理员',
    code: 'ADMIN',
    description: '系统超级管理员',
    status: 1
  }, {
    id: 2,
    name: '系统管理员',
    code: 'ADMIN',
    description: '系统超级管理员',
    status: 1
  }];
  disabled = false;
  showSearch = true;

  ngOnInit(): void {
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
