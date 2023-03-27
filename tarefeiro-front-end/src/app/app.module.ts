import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TarefaapiComponent } from './services/tarefaapi/tarefaapi.component';
import { ShowTarefaapiComponent } from './services/tarefaapi/show-tarefaapi/show-tarefaapi.component';
import { AddEditTarefaapiComponent } from './services/tarefaapi/add-edit-tarefaapi/add-edit-tarefaapi.component';

import { TarefaApiService } from './tarefa-api.service';
import { DashboardComponent } from './navegation/dashboard/dashboard.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { HeaderComponent } from './navegation/header/header.component';
import { AuthModule } from './auth/auth.module';
import { ShowUserComponent } from './navegation/user/show-user/show-user.component';
@NgModule({
  declarations: [
    AppComponent,
    TarefaapiComponent,
    ShowTarefaapiComponent,
    AddEditTarefaapiComponent,
    DashboardComponent,
    HeaderComponent,
    ShowUserComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [
    TarefaApiService,
  {provide: APP_BASE_HREF, useValue:'/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
