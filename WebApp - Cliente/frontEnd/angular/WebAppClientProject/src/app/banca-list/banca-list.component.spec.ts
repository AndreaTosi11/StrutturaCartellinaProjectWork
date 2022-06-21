import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancaListComponent } from './banca-list.component';

describe('BancaListComponent', () => {
  let component: BancaListComponent;
  let fixture: ComponentFixture<BancaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BancaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
