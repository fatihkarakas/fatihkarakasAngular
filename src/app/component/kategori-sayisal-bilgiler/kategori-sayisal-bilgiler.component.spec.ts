import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriSayisalBilgilerComponent } from './kategori-sayisal-bilgiler.component';

describe('KategoriSayisalBilgilerComponent', () => {
  let component: KategoriSayisalBilgilerComponent;
  let fixture: ComponentFixture<KategoriSayisalBilgilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KategoriSayisalBilgilerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KategoriSayisalBilgilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
