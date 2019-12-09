import {Component, OnInit} from '@angular/core';

interface Resource {
  id: number;
  name: string;
  level: number;
  type: number;
  code: string;
  uri: string;
  method: string;
  icon: string;
  parentId: number;
  status: number;
  createAt: string;
  updateAt: string;
  createBy: number;
  updateBy: number;
  children: Resource[];
  expand: boolean;
}

interface ParentItemData {
  key: number;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number | string;
  creator: string;
  createdAt: string;
  expand: boolean;
}

interface ChildrenItemData {
  key: number;
  name: string;
  date: string;
  upgradeNum: string;
}

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.less']
})
export class ResourceComponent implements OnInit {
  listOfParentData: ParentItemData[] = [];
  listOfChildrenData: ChildrenItemData[] = [];

  listOfResource: Resource[] = [{
    id: 1,
    name: '所有权限',
    level: 0,
    type: 1,
    code: 'RES_ALL',
    uri: '/**',
    method: '*',
    icon: '/icon',
    parentId: null,
    status: 1,
    createAt: '2014-12-24 23:12:00',
    updateAt: '2014-12-24 23:12:00',
    createBy: 1,
    updateBy: 1,
    children: [{
      id: 3,
      name: '所有权限',
      level: 1,
      type: 1,
      code: 'RES_ALL',
      uri: '/dgas/grewhfewdv/y4reutbv3/543ghsdf',
      method: '*',
      icon: '/icon',
      parentId: 1,
      status: 1,
      createAt: '2014-12-24 23:12:00',
      updateAt: '2014-12-24 23:12:00',
      createBy: 1,
      updateBy: 1,
      children: [{
        id: 5,
        name: '所有权限',
        level: 1,
        type: 1,
        code: 'RES_ALL',
        uri: '/dgas/grewhfewdv/y4reutbv3/543ghsdf',
        method: '*',
        icon: '/icon',
        parentId: 3,
        status: 1,
        createAt: '2014-12-24 23:12:00',
        updateAt: '2014-12-24 23:12:00',
        createBy: 1,
        updateBy: 1,
        children: [],
        expand: false,
      }],
      expand: false,
    }],
    expand: false,
  }, {
    id: 2,
    name: '所有权限',
    level: 0,
    type: 1,
    code: 'RES_ALL',
    uri: '/**',
    method: '*',
    icon: '/icon',
    parentId: null,
    status: 1,
    createAt: '2014-12-24 23:12:00',
    updateAt: '2014-12-24 23:12:00',
    createBy: 1,
    updateBy: 1,
    children: [{
      id: 4,
      name: '所有权限',
      level: 1,
      type: 1,
      code: 'RES_ALL',
      uri: '/**',
      method: '*',
      icon: '/icon',
      parentId: 2,
      status: 1,
      createAt: '2014-12-24 23:12:00',
      updateAt: '2014-12-24 23:12:00',
      createBy: 1,
      updateBy: 1,
      children: [],
      expand: false,
    }],
    expand: false,
  }, {id: 2,
    name: '所有权限',
    level: 0,
    type: 1,
    code: 'RES_ALL',
    uri: '/**',
    method: '*',
    icon: '/icon',
    parentId: null,
    status: 1,
    createAt: '2014-12-24 23:12:00',
    updateAt: '2014-12-24 23:12:00',
    createBy: 1,
    updateBy: 1,
    children: [],
    expand: false}];


  ngOnInit(): void {
    for (let i = 0; i < 3; ++i
    ) {
      this
        .listOfParentData.push({
        key: i,
        name: 'Screem',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00',
        expand: false
      });
    }

    for (let i = 0; i < 3; ++i) {
      this.listOfChildrenData.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56'
      });
    }
  }

}
