describe('Teperature convert function', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Conver celcius to farenheit', () => {
    cy.get('.celcius-input input').type('12');
    cy.get('.farenheit-input input').should('have.value', '53.6');
  });

  it('Conver farenheit to celcius', () => {
    cy.get('.farenheit-input input').type('23.15');
    cy.get('.celcius-input input').should('have.value', '-4.92');
  });
});
