const sum = require('./sum');

describe('1 - Testa a função `sum`, conforme a seguir:', () => {
  it('1.1 - Verifica se os somatórios são realizados.', () => {
    expect(sum(4, 5)).toEqual(9);
    expect(sum(0, 0)).toEqual(0);
  });
  it('1.2 - Verifica se há texto(string) em uma variável e apresenta erro.', () => {
    expect(() => sum(4, "5")).toThrow(Error);
  });
  it('1.3 - Verifica se há texto(string) em uma variável e apresenta uma mensagem de erro específica.', () => {
    expect(() => sum(4, "5")).toThrow('parameters must be numbers');
  });
});
