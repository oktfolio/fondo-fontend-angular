import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'genderPipe'
})
export class GenderPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === 'M') {
      return '男';
    }
    if (value === 'F') {
      return '女';
    }
    if (value === 'T') {
      return '跨性别';
    }
    if (value === 'I') {
      return '无性别';
    }
    if (value === 'U') {
      return '未指定';
    }
    if (value === 'N') {
      return '不愿透露';
    } else {
      return '其他';
    }

  }

}
