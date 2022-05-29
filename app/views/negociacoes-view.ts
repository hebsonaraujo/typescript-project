import { View } from "./view.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoView extends View <Negociacoes>{

  constructor(seletor: string) {
    super(seletor)
  }
  protected template(model : Negociacoes) : string {
    return `
    <table class="table table-hover table-bordered">
      <thead>
          <tr>
              <th>DATA</th>
              <th>QUANTIDADE</th>
              <th>VALOR</th>
          </tr>
      </thead>
      <tbody>
      ${model.listar().map(negociacao => {
        return `
            <tr>
                <td>
                ${new Intl.DateTimeFormat()
                  .format(negociacao._data)}
                </td>
                <td>
                    ${negociacao._quantidade}
                </td>
                <td>
                    ${negociacao._valor}
                </td>
            </tr>
        `;
    }).join('')}
          
      </tbody>
    </table>
    `
  }
  //sobrecarga
  private teste() {
    
    console.log('teste na negociacoes view ts')
  }
  
}