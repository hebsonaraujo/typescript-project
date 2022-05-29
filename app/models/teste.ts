import { Negociacao } from "./negociacao.js";

export class Teste extends Negociacao {
  private soma2: number;
  static initNumb: number = 0;
  str: string = 'lala'
  constructor(data: Date,b: number,c:number) {
    super(data,b,c)

  }
  set _soma2(a) {
    console.log('antes',Teste.initNumb)
    Teste.initNumb = 5;
    console.log('after',Teste.initNumb)
    this.soma2 = a * 2.3;
  }
  get _soma2() {
    
    return this.soma2

  }
  lili() {
    alert('lililili')    
  }
  
}