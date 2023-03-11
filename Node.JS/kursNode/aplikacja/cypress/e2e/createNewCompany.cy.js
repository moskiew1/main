describe('e2e create company', () => {
    it('open login', () => {
        cy.visit('/');
        cy.get('[data-ctx="login"]').click();
        cy.get('[data-ctx="email"]').type("moskiew@gmail.com", {delay: 200});
        cy.get('[data-ctx="password"]').type("moskiew", {delay: 200});
        cy.get('[data-ctx="login1"]').click();
        cy.get('[data-ctx="companies"]').click();
        cy.get('[data-ctx="create-company"]').click();
        cy.get('[data-ctx="company-name"]').type("Butex", {delay: 200});
        cy.get('[data-ctx="company-slug"]').type("Butex", {delay: 200});
        cy.get('[data-ctx="employees-count"]').type(10, {delay: 200});
        cy.get('[data-ctx="create"]').click();
        cy.get('[data-ctx="delete"]').click({delay: 3000});
    });
  });