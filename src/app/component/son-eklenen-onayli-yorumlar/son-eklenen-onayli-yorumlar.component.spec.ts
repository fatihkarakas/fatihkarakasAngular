import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonEklenenOnayliYorumlarComponent } from './son-eklenen-onayli-yorumlar.component';

describe('SonEklenenOnayliYorumlarComponent', () => {
  let component: SonEklenenOnayliYorumlarComponent;
  let fixture: ComponentFixture<SonEklenenOnayliYorumlarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SonEklenenOnayliYorumlarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonEklenenOnayliYorumlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
