/// <refernce types="sypress" />

describe("E2E - option select", () => {
    it("Check Option", () => {
        cy.visit("/");
        cy.contains("BUY NOW").click()
        
        // find select at name
            //cy.get("#archives-dropdown--1").select("September 2017")
        
        // find select on value
            //cy.get("#archives-dropdown--1").select("https://skleptest.pl/2017/09/")
        
        //finde select on index(number)
            //cy.get("#archives-dropdown--1").select(3)
    })

    // it.only("Check all options", () => {
    //     cy.visit("/");
    //     cy.contains("BUY NOW").click()

    //     cy.get("#archives-dropdown--1").then(select => {
    //         cy.wrap(select).find("option").each(opcja => {
    //             cy.wrap(select).select(opcja.text())
    //         })
    //})
    //})
});