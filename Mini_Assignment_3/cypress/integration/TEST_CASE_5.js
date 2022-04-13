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
    it('Click on the Links button found at the left side. Validate the number of links present under the links option.',function()
    {
        cy.get("div.element-group:nth-child(1)  > div > ul >  #item-5").click()
    })
    it('Validating the url for links page', () => {
        cy.url().should('contain', '/links')
    })

    it('Validating the number of links', () => {
        cy.get('#linkWrapper > p > a').should('have.length', 9)
    })
})