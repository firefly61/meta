import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  @Input() result: any;
  // @Input() header: any;
  dataSet = [];

  constructor() {
  }

  ngOnInit() {
    // this.dataSet = this.result.data.result;
    let head = this.result.header.columns;
    let body = this.result.data.result;
    let bodyResult = [];
    body.forEach(v => {
      let obj = {};
      head.forEach(m => {
        if (v[m.name]) {
          obj[m.name] = v[m.name];
        } else {
          obj[m.name] = '';
        }
      });
      bodyResult.push(obj);
    });
    console.log(bodyResult);
    this.dataSet = bodyResult;
  }
}
