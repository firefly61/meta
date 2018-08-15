import {Component, Input, OnInit} from '@angular/core';
import {DataControlService} from './dataControl.service';
import {BaseData} from './baseData';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  providers: [DataControlService]
})
export class FormComponent implements OnInit {

  @Input() datas: BaseData<any>[] = [];

  form: FormGroup;
  payLoad = '';

  constructor(private dcs: DataControlService) { }

  ngOnInit() {
    this.form = this.dcs.toFormGroup(this.datas);
  }

   onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
   }

}
