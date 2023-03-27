import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaapiComponent } from './tarefaapi.component';

describe('TarefaapiComponent', () => {
  let component: TarefaapiComponent;
  let fixture: ComponentFixture<TarefaapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefaapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefaapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
