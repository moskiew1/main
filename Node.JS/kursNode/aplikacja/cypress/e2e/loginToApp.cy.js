describe('e2e Login', () => {
    it('passes', () => {
      cy.visit('/');
      cy.get('[data-ctx="companies"]').click();
      cy.get('[href="/firmy/test"]').click();
    })
    it('open login', () => {
        cy.visit('/');
        cy.get('[data-ctx="login"]').click();
        cy.get('[data-ctx="email"]').type("moskiew@gmail.com", {delay: 200});
        cy.get('[data-ctx="password"]').type("moskiew", {delay: 200});
        cy.get('[data-ctx="login1"]').click();
    });
  });