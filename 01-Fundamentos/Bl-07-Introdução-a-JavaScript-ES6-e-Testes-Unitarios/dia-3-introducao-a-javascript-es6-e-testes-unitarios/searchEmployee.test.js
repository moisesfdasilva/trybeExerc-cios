const searchEmployee = require('./searchEmployee');

describe('BONUS - Testa a função `searchEmployee`, conforme a seguir:', () => {
  it('B.1 - Verifica as informações são apresentadas.', () => {
    expect(searchEmployee('4678-2', 'firstName')).toEqual('Paul');
    expect(searchEmployee('9852-2-2', 'lastName')).toEqual('Cook');
  });
  it('B.2 - Verifica se apresenta a mensagem "ID não identificada"', () => {
    expect(searchEmployee('4678-2x', 'firstName')).toEqual('ID não identificada');
  });
  it('B.3 - Verifica se apresenta a mensagem "Informação indisponível"', () => {
    expect(searchEmployee('4678-2', 'firstNamex')).toEqual('Informação indisponível');
  });
});