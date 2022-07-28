const encode = require('./encode.js');

describe('4.1 - Testa a função `encode`, conforme a seguir:', () => {
  it('4.1.1 - Verifica se é uma função.', () => {
    expect(typeof encode).toBe('function');
  });
  it('4.1.2 - Verifica se a frase com letras retorna a frase com números.', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('4.1.3 - Verifica se a frase com letras retorna a frase sem números.', () => {
    expect(encode('bc')).toBe('bc');
  });
  it('4.1.4 - Verifica se a frase inicial tem o mesmo tamanho que o resultado.', () => {
    expect(encode('abc').length).toBe('123'.length);
  });
});