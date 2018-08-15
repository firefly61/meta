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
    console.log(this.result);
    this.dataSet = this.result.data.result;
  }


}
