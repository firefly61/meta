import { Component, ViewChild, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { AppAnchorDirective } from '../anchor.directive';
import {TableComponent} from '../table/table.component';
import {DataService} from '../form/data.service';
import {FormComponent} from '../form/form.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.less'],
  providers: [DataService]
})
export class ResultComponent implements OnInit {

  @ViewChild(AppAnchorDirective) appAnchor: AppAnchorDirective;
  result: any;

  datas: any[];

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private formService: DataService) {
    this.result = {
      header: {
        columns: [
          {
            name: 'id',
            title: '序',
            type: 'integer',
            hide: false,
            order: 0
          }, {
            name: 'name',
            title: '名称',
            type: 'String',
            hide: false,
            order: 1
          }, {
            name: 'mobile',
            title: '手机号',
            type: 'String',
            hide: false,
            order: 2
          }, {
            name: 'gender',
            title: '性别',
            type: 'String',
            hide: false,
            order: 3
          }, {
            name: 'action',
            title: '操作',
            type: 'String',
            hide: false,
            order: 4
          }
        ]
      },
      data: {
        total: 300,
        page: 10,
        pageSize: 20,
        result: [
          {
            id: 3341,
            name: 'tester1',
            mobile: '13426757891',
            gender: 1
          },
          {
            id: 3342,
            name: 'tester2',
            mobile: '13426757892',
            gender: 2
          },
          {
            id: 3343,
            name: 'tester3',
            mobile: '13426757893',
            gender: 1,
            action: '删除'
          },
          {
            id: 3344,
            name: 'tester4',
            mobile: '13426757894',
            gender: 2
          }
        ]
      }
    };

    this.datas = formService.getDatas();
  }

  ngOnInit() {
  }

  loadTable() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(TableComponent);
    let viewContainerRef = this.appAnchor.ViewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance).result = this.result;
  }


  // loadForm() {
  //   let componentFactory = this.componentFactoryResolver.resolveComponentFactory(FormComponent);
  //   let viewContainerRef = this.appAnchor.ViewContainerRef;
  //   viewContainerRef.clear();
  //
  //   let componentRef = viewContainerRef.createComponent(componentFactory);
  //   (componentRef.instance).result = this.datas;
  // }

}
