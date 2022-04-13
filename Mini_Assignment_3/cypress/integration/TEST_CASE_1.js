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
    it('Click on the Text Box button found at the left side enter the appropriate text and submit it.',function()
    {
        cy.get("div.element-group:nth-child(1)  > div > ul >  #item-0").click()
        cy.get('#app > div > div > div.pattern-backgound.playgound-header > div').should('contain.text', 'Text Box')
        cy.fixture('example').then((Local)=>{
            cy.get('#userName').type(Local.FullName).click().should('have.value',Local.FullName)
            cy.get('#userEmail').type(Local.Email).click().should('have.value',Local.Email)
            cy.get('#currentAddress').type(Local.CurrentAddress).click().should('have.value',Local.CurrentAddress)
            cy.get('#permanentAddress').type(Local.PermanentAddress).click().should('have.value',Local.PermanentAddress)
    })
    it('Validating the submitted details', () => {
        cy.get('#submit').click()

        cy.get('#name').should('contain.text', example.FullName)
        cy.get('#email').should('contain.text', example.Email)
        cy.get("div[id*='output']  > div > [id*='currentAddress']").should('contain.text', example.CurrentAddress)
        cy.get("div[id*='output']  > div > [id*='permanentAddress']").should('contain.text', example.PermanentAddress)
    })
})
    })
