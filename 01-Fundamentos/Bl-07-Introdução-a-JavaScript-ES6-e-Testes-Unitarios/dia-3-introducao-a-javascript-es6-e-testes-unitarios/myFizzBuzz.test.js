const myFizzBuzz = require('./myFizzBuzz');

describe('3 - Testa a função `myFizzBuzz`, conforme a seguir:', () => {
  it('3.1 - Verifica se o número retorna "fizzbuzz".', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });
  it('3.2 - Verifica se o número retorna "fizz".', () => {
    expect(myFizzBuzz(21)).toEqual('fizz');
  });
  it('3.3 - Verifica se o número retorna "buzz".', () => {
    expect(myFizzBuzz(20)).toEqual('buzz');
  });
  it('3.4 - Verifica se o número 7 (número não divisível por 3 ou 5) retorna 7.', () => {
    expect(myFizzBuzz(7)).toEqual(7);
  });
  it('3.5 - Verifica se um parâmetro não esperado apresenta erro.', () => {
    expect(myFizzBuzz('a')).toBeFalsy();
  });
});
