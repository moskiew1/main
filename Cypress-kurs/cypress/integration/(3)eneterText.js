// <refernce types="sypress" />

describe("E2E - Enter Text", () => {
    it("Enter Text", () => {
        cy.visit("/") 
        cy.get("#search-field-top-bar").type("black {enter}", {delay: 75})  // {backspace} 
    })

    //  it("delete text on input", () => {
    //     cy.get("#search-field-top-bar").clear();
    //  })
});