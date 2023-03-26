/// <refernce types="cypress" />

import selectPage from "../support/page-object/selectPage";

describe("E2E - option select", () => {
    it("Check Option", () => {
        cy.visit("/");
        cy.contains("BUY NOW").click()
         
    })

    it.only("Check all options", () => {
        cy.visit("https://the-internet.herokuapp.com/dropdown");
        
        selectPage.selectAllOption();
    })
});