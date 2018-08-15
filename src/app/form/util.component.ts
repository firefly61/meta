import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BaseData } from './baseData';

@Component({
  selector: 'app-util',
  templateUrl: './util.component.html'
})

export class UtilComponent {
  @Input() data: BaseData<any>;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.data.key].valid;
  }
}
