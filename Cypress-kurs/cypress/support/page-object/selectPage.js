class SelectPage {
    get select() {
        return cy.get("#dropdown");
    }

    selectAllOption() {
        this.select.then(select => {
            cy.wrap(select).find("option").each(opcja => {
                cy.wrap(select).select(opcja.length)
            })     
    })
    }
}

export default new SelectPage();