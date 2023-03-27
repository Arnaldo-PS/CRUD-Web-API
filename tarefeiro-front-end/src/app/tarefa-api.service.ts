import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaApiService {

  readonly tarefaAPIUrl = "https://localhost:7284/api"

  constructor( private http: HttpClient) { }

// TAREFAS

  getTarefaList():Observable<any[]>{
    return this.http.get<any>(this.tarefaAPIUrl + '/tarefas');
  }

  addTarefa(data:any){
    return this.http.post(this.tarefaAPIUrl + '/tarefas', data)
  }

  updateTarefa(id: number|string, data:any){
    return this.http.put(this.tarefaAPIUrl + `/tarefas/${id}`, data)
  }

  deleteTarefa(id: number){
    return this.http.delete(this.tarefaAPIUrl + `/tarefas/${id}`)
  }

  // TAREFAS TIPOS

  getTarefaTiposList():Observable<any[]>{
    return this.http.get<any>(this.tarefaAPIUrl + '/tarefaTipos');
  }

  addTarefaTipos(data:any){
    return this.http.post(this.tarefaAPIUrl + '/tarefaTipos', data)
  }

  updateTarefaTipos(id: number|string, data:any){
    return this.http.put(this.tarefaAPIUrl + `/tarefaTipos/${id}`, data)
  }

  deleteTarefaTipos(id: number){
    return this.http.delete(this.tarefaAPIUrl + `/tarefaTipos/${id}`)
  }

  // STATUS

  getStatusList():Observable<any[]>{
    return this.http.get<any>(this.tarefaAPIUrl + '/status');
  }

  addStatus(data:any){
    return this.http.post(this.tarefaAPIUrl + '/status', data)
  }

  updateStatus(id: number|string, data:any){
    return this.http.put(this.tarefaAPIUrl + `/status/${id}`, data)
  }

  deleteStatus(id: number){
    return this.http.delete(this.tarefaAPIUrl + `/status/${id}`)
  }

    // STATUS

    getClienteList():Observable<any[]>{
      return this.http.get<any>(this.tarefaAPIUrl + '/clientes');
    }

    addCliente(data:any){
      return this.http.post(this.tarefaAPIUrl + '/clientes', data)
    }

    updateCliente(id: number|string, data:any){
      return this.http.put(this.tarefaAPIUrl + `/clientes/${id}`, data)
    }

    deleteCliente(id: number){
      return this.http.delete(this.tarefaAPIUrl + `/clientes/${id}`)
    }

}
