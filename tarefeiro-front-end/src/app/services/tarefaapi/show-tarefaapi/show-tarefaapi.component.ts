import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefaApiService } from 'src/app/tarefa-api.service';

@Component({
  selector: 'app-show-tarefaapi',
  templateUrl: './show-tarefaapi.component.html',
  styleUrls: ['./show-tarefaapi.component.css']
})
export class ShowTarefaapiComponent implements OnInit {

  tarefaList$!:Observable<any[]>;
  tarefaStatusList$!:Observable<any[]>
  tarefaTiposList$!:Observable<any[]>;
  tarefaTiposList:any=[];

  //Map para mostrar a associaçao entre as tabelas (FK)

  tarefaTiposMap:Map<number, string> = new Map()


  constructor(private service:TarefaApiService){}

  ngOnInit(): void {
    this.tarefaList$ = this.service.getTarefaList();
    this.tarefaTiposList$ = this.service.getTarefaTiposList();
    this.refreshTarefaTiposMap();
  }

  //Variavel

  modalTitle:string = '';
  activateAddEditTarefaComponent:boolean = false;
  tarefa:any;

  modalAdd(){
    this.tarefa = {
      id:0,
      status:null,
      comentario:null,
      tarefaTipoId:null
    }
    this.modalTitle = "Nova Tarefa"
    this.activateAddEditTarefaComponent = true
  }

  modalEdit(item:any){
    this.tarefa = item;
    this.modalTitle = "Edição de tarefa"
    this.activateAddEditTarefaComponent = true;

  }

  modalClose(){
    this.activateAddEditTarefaComponent = false;
    this.tarefaList$ = this.service.getTarefaList();
  }

  delete(item:any){

    if(confirm(`Voce tem certeza que quer deletar a tarefa ${item.id}`)){
      this.service.deleteTarefa(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if(closeModalBtn){
          closeModalBtn.click();
        }

        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if(showDeleteSuccess){
          showDeleteSuccess.style.display = "block"
        }
        setTimeout(function(){
          if(showDeleteSuccess){
            showDeleteSuccess.style.display = "none"
          }
        },4000);
      })
    }


  }

  refreshTarefaTiposMap(){
    this.service.getTarefaTiposList().subscribe(data=>{
      this.tarefaTiposList = data;

      for(let i = 0; i< data.length; i++){
        this.tarefaTiposMap.set(this.tarefaTiposList[i].id, this.tarefaTiposList[i].tarefaNome)
      }
    })
  }


}
