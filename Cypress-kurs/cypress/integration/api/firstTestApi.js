/// <refernce types="cypress" />

describe("E2E - Tests API", () => {
    beforeEach(function() {
        cy.fixture("example").then(data => {
            this.daneApi = data;
        })
    })

    it("Veryfication Tags Api", () => {
        cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTag");
        cy.visit("http://angular.realworld.io/");
        cy.wait("@requestTag");
        cy.get("@requestTag").then(res => {
            console.log(res)
            expect(res.response.statusCode).to.equal(200)
            expect(res.response.body.tags).to.contain("welcome").and.to.contain("introduction")
        })
    })

    it("false login", function() {
        cy.intercept("POST", "https://api.realworld.io/api/users/login ").as("requestLogin")
        cy.get("a.nav-link").contains("Sign in").click();
        cy.login("test@gmail.com", "haslo1234")
        cy.wait("@requestLogin");
        cy.get("@requestLogin").then(res => {
            console.log(res);
            expect(res.response.statusCode).to.equal(403);
            expect(res.response.statusMessage).to.equal(this.daneApi.statusMessage403)
        })
    })

    it("good login", function() {
        cy.intercept("POST", "https://api.realworld.io/api/tags", { fixture: tags.json }).as("requestTag")
        cy.login("moskiew@gmail.com", "radoslaw1234")
        cy.wait("@requestTag");
        
    })
});