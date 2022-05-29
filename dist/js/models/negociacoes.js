export class Negociacoes {
    constructor() {
        this.negociacoes = [];
        this.varPublic = 'lala';
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listar() {
        console.log('negoc', this.negociacoes);
        return this.negociacoes;
    }
    toText() {
        return JSON.stringify(this.negociacoes, null, 4);
    }
}
