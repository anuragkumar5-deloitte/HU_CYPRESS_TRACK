/// <reference types ="cypress"/>
describe('My First Test', () =>
 {
    it('verify the title of the page', function()
    {
        cy.visit("https://demoqa.com/")
        cy.title().should('eq','ToolsQA')
    })
    it('Click on the Elements tile, new page opens verify whether correct URL is launched',function()
    {
        
        cy.get("#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-body > h5").click()
        cy.url().should('include','elements')

    })
    it('Click Check box button found at the left side, expand the Home option, and select the Documents check box ',function()
    {
        cy.get("div.element-group:nth-child(1)  > div > ul >  #item-1").click()
        cy.get("#tree-node-home").check({force: true}).should('be.checked')
    })
    it('Validating Home check result', () =>
     {
        cy.get('#result').should('contain.text', 'home')
        cy.get('#result').should('contain.text', 'desktop')
        cy.get('#result').should('contain.text', 'notes')
        cy.get('#result').should('contain.text', 'commands')
        cy.get('#result').should('contain.text', 'documents')
     })
     it('Validating Home checkbox deselection', () => {
        cy.get('#tree-node-home').uncheck({force: true}).should('not.be.checked')
    })
    it('Validating Documents checkbox selection', () => {
        cy.get("button[title*='Toggle']").click()
        cy.get('#tree-node-documents').check({force: true}).should('be.checked')
    })
})
