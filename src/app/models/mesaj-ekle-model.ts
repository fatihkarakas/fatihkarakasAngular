export class MesajEkleModel {
  mesaj: string;
  tamAd: string;
  eposta: string;
  ipAdres: string;
  verificationCode: string;


  constructor(mesaj: string, tamAd: string, eposta: string, ipAdres: string, verificationCode: string) {
    this.mesaj = mesaj;
    this.tamAd = tamAd;
    this.ipAdres = ipAdres;
    this.eposta = eposta;
    this.verificationCode = verificationCode;
  }
}
