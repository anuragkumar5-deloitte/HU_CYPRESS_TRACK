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
    it('Click on Radio Button found at the left side, select the impressive option. assert that correct option is selected',function()
    {
    })
})
