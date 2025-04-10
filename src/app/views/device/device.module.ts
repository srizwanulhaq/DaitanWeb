import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 

import { DeviceRoutingModule } from './device-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent
  ],
  imports: [
    FormsModule,
    DeviceRoutingModule,
    TableModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    CommonModule
  ]
})
export class DeviceModule { 
  
  
}
