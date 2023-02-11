describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get(`[data-ctx=registration]`).click()
  })
})