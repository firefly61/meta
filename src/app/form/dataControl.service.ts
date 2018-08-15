import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {BaseData} from './baseData';

@Injectable()
export class DataControlService {
  constructor() {
  }

  toFormGroup(data: BaseData<any>[]) {
    let group: any = {};

    data.forEach(v => {
      group[v.key] = v.required
        ? new FormControl(v.value || '', Validators.required)
        : new FormControl(v.value || '');
    });

    return new FormGroup(group);
  }

}
