/// <refernce types="cypress" />

describe("create ask to Api - ", () => {
    beforeEach(function() {
        cy.fixture("example").then(data => {
            this.daneApi = data;
        })
    })

    it("Authorizations and create new Post", () => {
        const authorizationData = {
            "user": {
                "email": "moskiew@gmail.com",
                "password": "radoslaw1234"
            }
        }

        const dataPost = {
            "article": {
                "tagList": [],
                "title": "to jest jebany",
                "description": "test5",
                "body": "test5"
            }
        }

        cy.request("POST", "https://api.realworld.io/api/users/login", authorizationData).its("body").then(res => {
            const authToken = res.user.token;

            cy.request({
                method: "POST",
                url: "https://api.realworld.io/api/articles/",
                body: dataPost,
                headers: {
                    'authorization': `Token ` + authToken 
                }
            }).then(res => {
                expect(res.status).to.equal(200)
            })    
        })
    }) 
});