import { View } from "./view.js";
export class MensagemView extends View {
    constructor(selector) {
        super(selector);
    }
    template(model) {
        return `
      <p class="alert alert-info">${model}</p>
    `;
    }
}
