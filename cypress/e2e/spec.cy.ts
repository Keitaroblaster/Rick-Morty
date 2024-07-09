describe('Rick and Morty App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should load the application', () => {
    cy.contains('Tirez une carte').should('be.visible');
  });

  it('should draw a character', () => {
    cy.get('button').contains('Tirez une carte').click();
    cy.get('.card').should('be.visible');
  });
});
