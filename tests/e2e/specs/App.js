// https://docs.cypress.io/api/introduction/api.html

describe('App', () => {
  it('Should contain header DOM', () => {
    cy.visit('/');
    cy.get('header').within(() => {
      cy.get('.main__header--content');
      cy.get('#header-alert');
      cy.get('.header__minicart');
    });
  });
});
