import { Negociacoes } from "../models/negociacoes";
import { View } from "./view.js";

export class MensagemView extends View <string>{
  constructor(selector: string) {
    super(selector)
  }
  template(model: string): string {
    return `
      <p class="alert alert-info">${model}</p>
    `    
  }
}

