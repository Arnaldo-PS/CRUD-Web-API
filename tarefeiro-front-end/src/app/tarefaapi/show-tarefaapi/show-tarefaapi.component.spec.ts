import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTarefaapiComponent } from './show-tarefaapi.component';

describe('ShowTarefaapiComponent', () => {
  let component: ShowTarefaapiComponent;
  let fixture: ComponentFixture<ShowTarefaapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTarefaapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTarefaapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
