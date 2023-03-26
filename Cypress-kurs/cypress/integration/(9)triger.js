/// <refernce types="cypress" />

describe("E2E - scrolls/hover", () => {
    //it("hover on element", () => {
       // cy.visit("https://tworcastron.pl/");
        //cy.get(".post-card__mask").eq(0).trigger("focus");
    //})

    it("scroll", () => {
        cy.visit("/")
        cy.get("#es_txt_button").scrollIntoView();
    })
});