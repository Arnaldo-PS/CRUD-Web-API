import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TarefaapiComponent } from './tarefaapi/tarefaapi.component';
import { ShowTarefaapiComponent } from './tarefaapi/show-tarefaapi/show-tarefaapi.component';
import { AddEditTarefaapiComponent } from './tarefaapi/add-edit-tarefaapi/add-edit-tarefaapi.component';

import { TarefaApiService } from './tarefa-api.service';
@NgModule({
  declarations: [
    AppComponent,
    TarefaapiComponent,
    ShowTarefaapiComponent,
    AddEditTarefaapiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TarefaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
