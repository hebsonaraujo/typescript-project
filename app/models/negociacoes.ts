import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel {
  // private negociacoes: Negociacao[] = []
  private negociacoes: Array<Negociacao> = []
  public varPublic = 'lala'

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }
  // listar(): Array<Negociacao> {
  //  listar(): readonly Negociacao[]
  listar(): ReadonlyArray<Negociacao> {
    console.log('negoc',this.negociacoes)
    // return [...this.negociacoes]
    return this.negociacoes
  }
  toText() : string {
    return JSON.stringify(this.negociacoes,null,4)
  }
}
// const neg = new Negociacoes()
// neg.adiciona(new Negociacao())