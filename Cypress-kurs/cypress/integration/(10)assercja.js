/// <refernce types="cypress" />

describe("E2E - Click!", () => {
    it("Asercje expect end should", () => {
        cy.visit("/");

        // text verification
        cy.get(`.site-title`).should("contain", "Generic Shop");
        cy.get(`.site-title`).then(zakladka => {
            expect(zakladka).to.contain("Generic Shop")
        })

        //does contain text
        cy.get(`.site-title`).should("not.contain", "Sing Up");
        cy.get(`.site-title`).then(zakladka => {
            expect(zakladka).not.to.contain("Sign Up")
        })

        // does have a class
        cy.get("#search-field-top-bar").should("have.class", "search-field-top-bar");
        cy.get("#search-field-top-bar").then(search => {
            expect(search).to.have.class("search-field-top-bar")
        });

        //whether element is visible
        cy.get("#search-field-top-bar").should("be.visible"); // not.be.visible
        cy.get("#search-field-top-bar").then(search => {
            expect(search).to.be.visible
        });

        // veryfication download items
        cy.get("ul#desktop-menu").find("li").should("have.length", 16)
        cy.get("ul#desktop-menu").find("li").then(li => {
            expect(li).to.have.length(16)
        })
        
        // check value css on element
        cy.get("#search-field-top-bar").should("have.css", "height", "30px")
        cy.get("#search-field-top-bar").then(search => {
            expect(search).to.have.css("height", "30px")
        })


    })
})