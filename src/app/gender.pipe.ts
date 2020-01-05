import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'genderPipe'
})
export class GenderPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    switch (value) {
      case 'M':
        return '男';
      case 'F':
        return '女';
      case 'U':
        return '未指定';
      case 'N':
        return '不愿透露';
      case 'O':
        return '其他';
      case 'T':
        return '跨性别';
      case 'I':
        return '无性别';
    }
  }

}
