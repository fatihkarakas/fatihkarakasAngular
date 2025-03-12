import { ChangeDetectionStrategy, Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { MesajEkleModel } from '../../models/mesaj-ekle-model';

@Component({
  selector: 'app-iletisim',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './iletisim.component.html',
  styleUrls: ['./iletisim.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IletisimComponent implements OnInit {
  apiUrl = environment.apiUrl + 'mesajlar/mesaj-ekle';
  private http = inject(HttpClient);
  mesajForm!: FormGroup;
  verificationCode: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.mesajForm = this.fb.group({
      tamAd: ['', [Validators.required, Validators.minLength(3)]],
      eposta: ['', [Validators.required, Validators.email]],
      mesaj: ['', [Validators.required, Validators.minLength(10)]],
      ipAdres: [{ value: '', disabled: true }, Validators.required],
      verificationCode: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    });

    this.getIpAddress();
    this.generateVerificationCode();
  }

  getIpAddress(): void {
    this.http.get<{ ip: string }>('https://api64.ipify.org?format=json').subscribe(data => {
      this.mesajForm.patchValue({ ipAdres: data.ip });
    });
  }

  generateVerificationCode(): void {
    this.verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
  }

  onSubmit(): void {
    console.log(this.mesajForm.getRawValue());
    if (this.mesajForm.invalid) {
      alert("Lütfen tüm alanları doğru şekilde doldurun!");
      return;
    }

    const formData = this.mesajForm.getRawValue();

    if (formData.verificationCode !== this.verificationCode) {
      alert("Doğrulama kodu hatalı!");
      return;
    }

    const mesajModel = new MesajEkleModel(
      formData.mesaj,
      formData.tamAd,
      formData.eposta,
      formData.ipAdres,
      formData.verificationCode
    );

    this.http.post(this.apiUrl, mesajModel).subscribe(response => {
      alert("Mesaj başarıyla gönderildi!");
      this.mesajForm.reset();
      this.generateVerificationCode();
    }, error => {
      alert("Mesaj gönderme sırasında hata oluştu!");
    });
  }
}
