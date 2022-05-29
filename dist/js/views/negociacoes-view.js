import { View } from "./view.js";
export class NegociacaoView extends View {
    constructor(seletor) {
        super(seletor);
    }
    template(model) {
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
    `;
    }
    teste() {
        console.log('teste na negociacoes view ts');
    }
}
