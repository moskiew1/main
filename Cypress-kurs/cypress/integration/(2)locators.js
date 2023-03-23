/// <refernce types="sypress" />

describe("E2E - lesson", () => {
    it("lokalizatory", () => {
        cy.visit("/")  // pobiera adres strony z pliku cypress.json

        //po znaczniku
        cy.get("a");

        // identyfikator
        cy.get("#masthead")

        // po klasie
        cy.get(".owl-item")

        //atrybuty
        cy.get(`[role="navigation"]`)

        // dokładniejszy atrybut z podaniem znacznika
        cy.get(`input[name="es_txt_group"]`)

        // pobieranie elementów po kilku atrybutach
        cy.get(`[src="https://skleptest.pl/wp-content/uploads/2017/06/hero-3.jpg"][width="1600"]`)
    
        //zalecana praktyka pobierania elementów
        //data-cy="menu"
        //cy.get(`[data-cy="menu"]`)
    })

    it.only("loaklizatory część 2", () => {
        //pobieranie elementów po nazwie
        cy.visit("/")
        cy.contains("Shop Now")
        cy.contains(`[class="cell-caption"]`, `FREE SHIPPING`)

        //pobieranie po rodzicach
        cy.get("li").parents("#desktop-menu").find("li").eq(1)
        cy.get("li").parents("#desktop-menu").find("li").contains("Blog")
    })
})