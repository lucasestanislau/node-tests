import Carrinho from "../Carrinho";
import Item from "../Item";

describe("Testes para o carrinho de comporas", () => {
  it("Deve conter os parÂmetros nulos", () => {
    const carrinho = new Carrinho();

    expect(carrinho.subtotal).toBeNull();
  });

  it("Deve ter itens adicionados ao carrinho", () => {
    const item1 = new Item("banana", 5, 1);
    const item2 = new Item("Uva", 1, 1);

    const carrinho = new Carrinho();
    carrinho.adiciona(item1);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe("object");
    expect(carrinho.itens).toContain(item1);
    expect(carrinho.itens).toContain(item2);
  });

  it("Deve gerar erro ao finalizar compra sem itens no carrinho", () => {
    function englobaError() {
      const carrinho = new Carrinho();
      carrinho.finalizarCompra();
    }

    expect(englobaError).toThrowError("Carrinho está vazio");
  });
});
