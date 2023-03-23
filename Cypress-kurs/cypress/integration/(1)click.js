/// <refernce types="sypress" />

describe("E2E - Click!", () => {
    it("Click on Element", () => {
        cy.visit("/");
        cy.contains('[href="https://skleptest.pl/my-account/"]', 'Account').click();
        cy.contains('[class="site-title"]', `Generic Shop`).click()

    })
});