import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', ev => {
        ev.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('nao foi possivel inicializar a aplicacao');
}
const btnImport = document.querySelector('#botao-import');
if (btnImport) {
    btnImport.addEventListener('click', () => {
        controller.importaDados();
    });
}
else {
    throw Error('nao foi possivel inicializar botao');
}
