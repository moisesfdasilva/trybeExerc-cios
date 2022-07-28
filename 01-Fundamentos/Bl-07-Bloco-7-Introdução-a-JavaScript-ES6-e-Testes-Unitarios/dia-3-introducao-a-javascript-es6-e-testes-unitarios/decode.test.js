const decode = require('./decode');

describe('4.2 - Testa a função `decode`, conforme a seguir:', () => {
  it('4.2.1 - Verifica se é uma função.', () => {
    expect(typeof decode).toBe('function');
  });
  it('4.2.2 - Verifica se a frase com números retorna a frase com letras.', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('4.2.3 - Verifica se a frase com números retorna a frase sem letras.', () => {
    expect(decode('678')).toBe('678');
  });
  it('4.2.4 - Verifica se a frase inicial tem o mesmo tamanho que o resultado.', () => {
    expect(decode('123').length).toBe('abc'.length);
  });
});