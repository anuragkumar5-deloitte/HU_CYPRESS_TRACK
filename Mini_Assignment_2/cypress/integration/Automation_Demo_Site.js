/// <reference types="cypress" />
describe('Automation_Demo_Site',()=>{
    // test case
    it('Select the two languages and validate the specified language is selected',()=>{
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#msdd').click()
        cy.fixture('example').then((Local)=>{
            cy.get('.ui-corner-all').contains(Local.language1).click().should('have.text',Local.language1)
            cy.get('.ui-corner-all').contains(Local.language2).click().should('have.text',Local.language2)

        })

    })
    it('Select the Skills and add a validation',()=>{
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#Skills').select('Analytics').should('have.value','Analytics')

    })
    it('Select the Country from the drop down and validate specified country is selected',()=>{
    cy.visit('http://demo.automationtesting.in/Register.html')
    cy.get("span[role='combobox'").click({force:true})
    cy.fixture('example').then((place)=>{
        cy.get("input[role='textbox']").type(place.country)
        cy.get("input[role='textbox']").type('{enter}')
        cy.get("#select2-country-container").should('have.text',place.country)
    })
    
    
        
    })

})
