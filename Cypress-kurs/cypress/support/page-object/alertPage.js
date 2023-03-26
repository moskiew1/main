class AlertPage {
    get btnAlert1() {
        return cy.get("#alert");
    }

    get btnAlert2() {
        return cy.get("#alert-confirm");
    }

    clickBtnAlert1() {
        this.btnAlert1.click();
    }
    
    clickBtnAlert2() {
        this.btnAlert2.click();
    }

    verifyAlertText(tekst) {
        cy.on("window:alert", text => {
            expect(text).to.equal(tekst)
        })
    }

    verifyAlertConfirmText() {
        cy.on("window:confirm", text => {
            expect(text).to.equal("Zaakceptuj aby kontynuować!");
        })
    }

    rejectAlert() {
        cy.on("window:confirm", () => false) 
    }

    acceptAlert() {
        cy.on("window:confirm", () => false) 
    }
    
}


export default new AlertPage();