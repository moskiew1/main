/// <refernce types="cypress" />

describe("Uplod Files", () => {
    it("Upload files", () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile("../fixtures/mole.png")
        cy.get("#file-submit").click();
        
    })
});

// Aby móc z uploadować plik należy zainstalować bibliotekę npm i --save-dev cypress-file-upload