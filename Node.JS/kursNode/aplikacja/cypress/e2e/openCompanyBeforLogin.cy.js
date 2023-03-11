describe('e2e Login', () => {
    it('passes', () => {
      cy.visit('/');
      cy.get('[data-ctx="companies"]').click();
      cy.get('[href="/firmy/test"]').click();
    })
  });