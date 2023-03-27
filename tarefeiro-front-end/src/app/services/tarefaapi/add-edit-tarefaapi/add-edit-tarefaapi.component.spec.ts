import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTarefaapiComponent } from './add-edit-tarefaapi.component';

describe('AddEditTarefaapiComponent', () => {
  let component: AddEditTarefaapiComponent;
  let fixture: ComponentFixture<AddEditTarefaapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTarefaapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTarefaapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
