import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.less']
})
export class EntryComponent implements OnInit {

  dataSet = [];
  tableHead = [];
  head: String = '';

  validateForm: FormGroup;

  addHeader(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    /*this.tableHead.push({
      id: 1,
      name: this.head
    });*/
    this.tableHead = [ ...this.tableHead, {
      name   : `${this.head}`
    }];
    this.dataSet = [ ...this.dataSet, {
      name   : `${this.head}`
    }];
    this.head = '';
  }

  del(i): void {
    this.tableHead = this.tableHead.filter(d => d.name !== i);
    this.dataSet = this.dataSet.filter(d => d.name !== i);
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      tableHeader: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

  addData(): void {

  }

}
