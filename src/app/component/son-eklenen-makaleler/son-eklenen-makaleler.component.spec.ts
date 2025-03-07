import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonEklenenMakalelerComponent } from './son-eklenen-makaleler.component';

describe('SonEklenenMakalelerComponent', () => {
  let component: SonEklenenMakalelerComponent;
  let fixture: ComponentFixture<SonEklenenMakalelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SonEklenenMakalelerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonEklenenMakalelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
