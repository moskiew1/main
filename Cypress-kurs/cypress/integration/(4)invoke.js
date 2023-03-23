/// <refernce types="sypress" />

describe("E2E - Method Invoke", () => {
    it("Invoke", () => {
        cy.visit("/");

        // download text from element
        cy.get(`[title="Contact"]`).invoke("text").then(tekst => {
            cy.log(tekst)
        });

        //get access in attribute
        cy.get(`[title="Contact"]`).invoke("attr", "href").then(link=> {
            cy.log(link);
        })
        cy.get(`[title="Contact"]`).invoke("attr", "title").then(title => {
            cy.log(title);
        })

        // download value from input we can also donwload any propertis from atrributes
        cy.get("#search-field-top-bar").type("Przykładowa wartość").invoke("prop", "value").then(value => {
            cy.log(value)
        })
    })
});