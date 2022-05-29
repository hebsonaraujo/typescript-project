import { Negociacao } from "./negociacao.js";
export class Teste extends Negociacao {
    constructor(data, b, c) {
        super(data, b, c);
        this.str = 'lala';
    }
    set _soma2(a) {
        console.log('antes', Teste.initNumb);
        Teste.initNumb = 5;
        console.log('after', Teste.initNumb);
        this.soma2 = a * 2.3;
    }
    get _soma2() {
        return this.soma2;
    }
    lili() {
        alert('lililili');
    }
}
Teste.initNumb = 0;
