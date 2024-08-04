describe('Home Page', () => {
  it('should visit the home page and check title', () => {
    cy.visit('/');
    cy.title().should('eq', 'Sketchy');
  });
});
