import { Routes } from '@angular/router'
import { DashboardComponent } from './navegation/dashboard/dashboard.component'
import { ShowUserComponent } from './navegation/user/show-user/show-user.component'
import { TarefaapiComponent } from './services/tarefaapi/tarefaapi.component'

export const rootRouterConfig: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: DashboardComponent},
  {path: 'tarefeiro', component: TarefaapiComponent},
  {path: 'user', component: ShowUserComponent},

]
