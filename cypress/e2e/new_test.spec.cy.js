describe("Testing Konga Site", ()=>{
    it("Launch site", ()=>{
        cy.visit("/")
    })

    it("click login link", ()=>{
        cy.get('div._12e27_1r3kc > a').should('be.visible').and('exist').click()
    })

    
    it("insert username", ()=>{
        cy.get('#username').should('be.visible').and('exist').type('gandy@yopmail.com')
    })

    it("insert password", ()=>{
        cy.get('#password').should('be.visible').and('exist').type('@Password1')
    })

    // it("click forgot password  link", ()=>{
    //     cy.get('._71d30_2oCCX').should('be.visible').and('exist').click()
    // })

    it("click login button", ()=>{
        cy.get('._0a08a_3czMG._988cf_1aDdJ').click()
    })

})

