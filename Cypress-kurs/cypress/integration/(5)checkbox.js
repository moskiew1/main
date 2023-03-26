/// <refernce types="cypress" />

describe("E2E - Click checkbox", () => {
    it("Click on checkbox", () => {
        cy.visit("/my-account/");
        cy.get("#rememberme").check().invoke("prop", "checked").then(checked => {
            cy.log(checked);
        })
        

    })
});