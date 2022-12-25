import Item from "../Item";

describe("Testes dos itens", () => {
  it("Deve ter 3 campos: nome, valor e quantidade", () => {
    const item = new Item("Água", 5, 10);

    expect(item.nome).toBe("Água");
    expect(item.quantidade).toBe(10);
    expect(item.valor).toBe(5);
  });

  it('Deve ter o preço calculado de acordo com a quantidade', () => {
    const item = new Item("Água", 5, 10);

    expect(item.pegaValorTotalItem()).toBe(50);
  })
});
