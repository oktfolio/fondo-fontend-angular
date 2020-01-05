import {Component, OnInit} from '@angular/core';

interface TreeNodeInterface {
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
  createBy: string;
  updateBy: string;
  expand?: boolean;
  children?: TreeNodeInterface[];
  parent?: TreeNodeInterface;
}

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.less']
})
export class ResourceComponent implements OnInit {
  mapOfExpandedData: { [id: string]: TreeNodeInterface[] } = {};

  listOfMapData: TreeNodeInterface[] = [{
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
    createBy: 'oktfolio',
    updateBy: 'oktfolio',
    children: [{
      id: 3,
      name: '所有权限3',
      level: 1,
      type: 1,
      code: 'RES_ALL',
      uri: '/dgas/grewhfewdv/y4reutbv3/543ghsdf',
      method: 'DELETE',
      icon: '/icon',
      parentId: 1,
      status: 1,
      createAt: '2014-12-24 23:12:00',
      updateAt: '2014-12-24 23:12:00',
      createBy: 'oktfolio',
      updateBy: 'oktfolio',
      children: [{
        id: 5,
        name: '所有权限5',
        level: 2,
        type: 1,
        code: 'RES_ALL',
        uri: '/dgas/grewhfewdv/y4reutbv3/543ghsdf',
        method: 'PATCH',
        icon: '/icon',
        parentId: 3,
        status: 1,
        createAt: '2014-12-24 23:12:00',
        updateAt: '2014-12-24 23:12:00',
        createBy: 'oktfolio',
        updateBy: 'oktfolio',
        children: [],
        expand: false,
      }],
      expand: false,
    }],
    expand: false,
  }, {
    id: 2,
    name: '所有权限2',
    level: 0,
    type: 1,
    code: 'RES_ALL',
    uri: '/**',
    method: 'PUT',
    icon: '/icon',
    parentId: null,
    status: 1,
    createAt: '2014-12-24 23:12:00',
    updateAt: '2014-12-24 23:12:00',
    createBy: 'oktfolio',
    updateBy: 'oktfolio',
    children: [{
      id: 4,
      name: '所有权限4',
      level: 1,
      type: 1,
      code: 'RES_ALL',
      uri: '/**',
      method: 'GET',
      icon: '/icon',
      parentId: 2,
      status: 0,
      createAt: '2014-12-24 23:12:00',
      updateAt: '2014-12-24 23:12:00',
      createBy: 'oktfolio',
      updateBy: 'oktfolio',
      children: [],
      expand: false,
    }],
    expand: false,
  }, {
    id: 3,
    name: '所有权限3',
    level: 0,
    type: 1,
    code: 'RES_ALL',
    uri: '/**',
    method: 'POST',
    icon: '/icon',
    parentId: null,
    status: 0,
    createAt: '2014-12-24 23:12:00',
    updateAt: '2014-12-24 23:12:00',
    createBy: 'oktfolio',
    updateBy: 'oktfolio',
    children: [],
    expand: false
  }];

  collapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
    if ($event === false) {
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.id === d.id)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: TreeNodeInterface): TreeNodeInterface[] {
    const stack: TreeNodeInterface[] = [];
    const array: TreeNodeInterface[] = [];
    const hashMap = {};
    stack.push({...root, level: 0, expand: false});

    while (stack.length !== 0) {
      const node = stack.pop()!;
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({...node.children[i], level: node.level! + 1, expand: false, parent: node});
        }
      }
    }

    return array;
  }

  visitNode(node: TreeNodeInterface, hashMap: { [id: string]: boolean }, array: TreeNodeInterface[]): void {
    if (!hashMap[node.id]) {
      hashMap[node.id] = true;
      array.push(node);
    }
  }

  ngOnInit(): void {
    this.listOfMapData.forEach(item => {
      this.mapOfExpandedData[item.id] = this.convertTreeToList(item);
    });
  }

}
