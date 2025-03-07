import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HakkimdaComponent } from './hakkimda.component';

describe('HakkimdaComponent', () => {
  let component: HakkimdaComponent;
  let fixture: ComponentFixture<HakkimdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HakkimdaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HakkimdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
