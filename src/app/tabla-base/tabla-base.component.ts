import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-base',
  templateUrl: './tabla-base.component.html',
  styleUrls: ['./tabla-base.component.css'],
})
export class TablaBaseComponent implements OnInit {
  victoria: number = 3;
  derrota: number = 2;
  ubiPelota: number = 0;

  constructor() {}
  ngOnInit() {}

  onReset() {
    this.clearMar();
    this.resImg();
  }

  onPista() {
    //diria donde esta la pelota
    alert(
      'LA pelota esta en ' + (this.ubiPelota == 0 ? 'Izquierda' : 'Derecha')
    );
  }

  resImg() {
    //resetea las url de las imagenes
    throw new Error('Method not implemented.');
  }

  clearMar() {
    //limpia el marcador
    this.victoria = 0;
    this.derrota = 0;
  }
  newRandom() {
    this.ubiPelota = Math.floor(Math.random() * 2);
  }
  onIzquierda() {
    this.ubiPelota == 0 ? this.victoria++ : this.derrota++;

    this.newRandom();
  }
  onDerecha() {
    this.ubiPelota == 1 ? this.victoria++ : this.derrota++;

    this.newRandom();
  }
}
