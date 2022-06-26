describe('theme switch function', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Change to dark mode', () => {
    cy.get('button.theme-switch').click();
    cy.get('body')
      .invoke('css', 'background-color')
      .should('eq', 'rgb(0, 0, 0)');
  });
});
