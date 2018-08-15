import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { LoginComponent } from './login/login.component';
import { NzDemoTableAjaxComponent } from './tables/table.component';
import { TableComponent } from './table/table.component';
import { EntryComponent } from './entry/entry.component';
import { ResultComponent } from './result/result.component';

import { AppRoutingModule } from './app-routing.module';

import { AppAnchorDirective } from './anchor.directive';
import { FormComponent } from './form/form.component';
import { UtilComponent } from './form/util.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NzDemoTableAjaxComponent,
    EntryComponent,
    ResultComponent,
    AppAnchorDirective,
    TableComponent,
    FormComponent,
    UtilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    AppRoutingModule
  ],
  entryComponents: [ TableComponent ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
