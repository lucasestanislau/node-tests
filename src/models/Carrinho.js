export default class Carrinho {
  constructor() {
    this.itens = [];
    this.subtotal = null;
    this.frete = null;
    this.total = null;
  }

  adiciona(item) {
    this.itens.push(item);
  }

  adicionaFrete(frete) {
    this.frete = frete;
  }
}
