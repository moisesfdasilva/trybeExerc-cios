const myRemove = require('./myRemove');

describe('2 - Testa a função `myRemove`, conforme a seguir:', () => {
  it('2.1 - Verifica se o array remove o valor solicitado.', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
