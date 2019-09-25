import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {MaterialModule} from '../shared/material/material.module';
import {HeaderComponent} from './components/header/header.component';
@NgModule({
  declarations: [
      HeaderComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports:[
      MaterialModule,
      HeaderComponent
  ]
})
export class SharedModule { }
