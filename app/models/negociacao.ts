import { date } from "../decorators/date.js";
import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao implements Imprimivel{
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    

    // constructor(data: Date, quantidade: number, valor: number) {
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // }
    //substituindo 
    constructor(
        // private _data: Date,
        // private _quantidade: number,
        // private _valor: number
        public readonly _data: Date,
        public readonly _quantidade: number,
        public readonly _valor: number    
    ){ 
        // super()
    }

    // get data(): Date{
    //     return this._data;
    // }

    // get quantidade(): number {
    //     return this._quantidade;
    // }

    // get valor(): number {
    //     return this._valor;
    // }

    get volume(): number {
        return this._quantidade * this._valor;
    }
    protected lala() {
        alert('lala')
    }
    public toText() : string {
        return `
            Data: ${this._data}
            Quantidade: ${this._quantidade}
            Valor: ${this._valor}
        `

    }
    @date()
    public static teste() {
        console.log('metodo estatico')
        //return this.lala();
    }
}
 const h : Imprimivel = new Negociacao(new Date,1,100);
 h.toText()