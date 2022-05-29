var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { date } from "../decorators/date.js";
export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    lala() {
        alert('lala');
    }
    toText() {
        return `
            Data: ${this._data}
            Quantidade: ${this._quantidade}
            Valor: ${this._valor}
        `;
    }
    static teste() {
        console.log('metodo estatico');
    }
}
__decorate([
    date()
], Negociacao, "teste", null);
const h = new Negociacao(new Date, 1, 100);
h.toText();
