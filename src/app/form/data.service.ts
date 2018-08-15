import { Injectable } from '@angular/core';

import { Dropdown } from './dropdown';
import { BaseData } from './baseData';
import { Textbox } from './textbox';

@Injectable()
export class DataService {
  getDatas() {
    let backDate = [
      {
        key: 'sex',
        label: '性别',
        selected: '0',
        options: [
          {key: '0', value: '全部'},
          {key: '1', value: '女'},
          {key: '2', value: '男'}
        ],
        order: 3,
        controlType: 1
      },
      {
        key: 'name',
        label: '姓名',
        value: 'nicole',
        placeholder: '请输入姓名',
        required: true,
        order: 1,
        controlType: 2
      },
      {
        key: 'email',
        label: '邮箱',
        type: 'email',
        placeholder: '请输入邮箱',
        order: 2,
        controlType: 2
      },
      {
        key: 'ueuu',
        label: 'xiiixx',
        type: 'email',
        placeholder: 'dddd',
        order: 4,
        controlType: 2
      }
    ];
    let datas: BaseData<any>[] = [];

    backDate.forEach((v) => {
      if (v.controlType === 1) {
        datas.push(new Dropdown(v));
      } else if (v.controlType === 2) {
        datas.push(new Textbox(v));
      }
    });

    return datas.sort((a, b) => a.order - b.order);
  }
}
