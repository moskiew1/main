/// <refernce types="sypress" />

import alertPage from "../support/page-object/alertPage";

describe("E2E - Alerts", () => {
    it("Click on Alert", () => {
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/");
        alertPage.clickBtnAlert1();
        alertPage.verifyAlertText("Przykładowa treść alertu");
    })

    it("Alert confirm", () => {
        alertPage.clickBtnAlert2();
        alertPage.verifyAlertText();
        alertPage.acceptAlert(); 
    })
});