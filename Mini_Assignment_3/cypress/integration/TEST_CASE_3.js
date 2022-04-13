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
        cy.get("div.element-group:nth-child(1)  > div > ul >  #item-2").click()
        cy.get('#app > div > div > div.pattern-backgound.playgound-header > div').should('contain.text', 'Radio Button')
    })
    it('Validating the url for text-box page', () => {
        cy.url().should('contain', '/radio-button')
    })

    it('Validating yes radio button selected in results', () => {
        cy.get('#yesRadio').check({force: true})
        cy.get('div:nth-child(2) > p > span').should('contain.text','Yes')
    })

    it('Validating Impressive radio button selected in results', () => {
        cy.get('#impressiveRadio').check({force: true})
        cy.get('div:nth-child(2) > p > span').should('contain.text','Impressive')
    })

    it('Validating No radio button is disabled', () => {
        cy.get('#noRadio').should('be.disabled')
})
 })
