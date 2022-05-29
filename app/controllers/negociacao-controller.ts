import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacaoView } from "../views/negociacoes-view.js"
import { Teste } from "../models/teste.js";
import { MensagemView } from "../views/mensagem-view.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { date } from "../decorators/date.js";
import { domInjector } from "../decorators/dom-injector.js";
import { NegociacoesDodia } from "../interfaces/negociacao-do-dia.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";

export class NegociacaoController {
  @domInjector('#data')
  private inputData: HTMLInputElement;
  @domInjector('#quantidade')
  private inputQuantidade: HTMLInputElement;
  @domInjector('#valor')
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacaoView = new NegociacaoView('#negView')
  private mensagemView = new MensagemView('#mensagemView')
  private readonly dia = 12
  private negociacaoService = new NegociacoesService();

  constructor() {
    
    // this.inputData = document.querySelector('#data') as HTMLInputElement;
    // this.inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade')
    // this.inputValor = <HTMLInputElement>document.querySelector('#valor');
    

    // this.negociacaoView.teste()
  }

  public adiciona(): void {
    const n = this.criaNegociacao();
    if(!this.ehDiaUtil(n._data)) {
      this.mensagemView.update('apenas negociacoes em dias uteis')
      return
    }
    this.negociacoes.adiciona(n);
    // imprimir(n)
    this.limpaForm();    
    this.atualizaView();
    // n._quantidade
    console.log('=====>>>>00',n.toText())
    console.log('=====>>>>111',this.negociacoes.toText())
    // const qqcoisa = 'lalla'
    imprimir(n,this.negociacoes)
    // console.log('###',n,Negociacao.teste())
  }

  public importaDados() : void {
   this.negociacaoService
    .obterNegociacoesDoDia()
    .then(negociacoesDeHoje => {
      negociacoesDeHoje.forEach(element => {
        this.negociacoes.adiciona(element)        
      });
      this.negociacaoView.update(this.negociacoes)
    })
  }
  @date()
  private ehDiaUtil(data: Date) {
    return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
  }

  private criaNegociacao(): Negociacao {
    console.log('CRIA NEG----',this.inputData.value)
    const date = new Date(this.inputData.value);
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
    // let f = new Teste(date,quantidade,valor)
    // // f.soma()
    
    // f._soma2 = 11;
    // console.log('%%%%',f._soma2)
    return new Negociacao(
      date,
      quantidade,
      valor
    );
  }
  private limpaForm(): void {
    this.inputData.value = ''
    this.inputQuantidade.value = ''
    this.inputValor.value = ''
    this.inputData.focus()

  }
  private atualizaView(): void {
    this.negociacaoView.update(this.negociacoes);
    this.mensagemView.update('negociacao efetuada com sucesso');

  }


}