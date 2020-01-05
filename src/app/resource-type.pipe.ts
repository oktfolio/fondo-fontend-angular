import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'resourceTypePipe'
})
export class ResourceTypePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    switch (value) {
      case 0:
        return '其他';
      case 1:
        return 'API';
      case 2:
        return '菜单';
      default:
        return '未分配';
    }
  }

}
