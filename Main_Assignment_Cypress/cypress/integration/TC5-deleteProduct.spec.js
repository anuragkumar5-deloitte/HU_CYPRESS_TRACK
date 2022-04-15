/// <reference types="Cypress" />

describe('Validating adding products of different category', { defaultCommandTimeout: 5000 }, () => {
    let data
    before(() => {
        cy.fixture("order_details").then((wcdata) => {
            data = wcdata
        })
        cy.visit(Cypress.env('home_page_url'))
        cy.signin(Cypress.env('valid_user_name'), Cypress.env('valid_password'))
    })

    beforeEach ('Keep cookies and reload', function(){
        Cypress.Cookies.preserveOnce('tokenp_', 'user');
        // cy.goToHome()
    })

    it('Validating the same category item purchase', () => {
        
        cy.get('#nameofuser').should('have.text', 'Welcome '+Cypress.env('valid_user_name'))
        cy.selectCategory(Cypress.env('sameCategory'))
        cy.wait(1000)    
        
    })
    it('validation : adding product 1 of different category', () => {
        cy.addItem(Cypress.env('sameCatProd1'))        
        cy.wait(1000)
        cy.addToCart()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added.')
        })
        cy.wait(1000)
        cy.goToHome()    
    })

    it('validation : adding product 2 of different category', () => {
        cy.selectCategory(Cypress.env('otherCategory'))
        cy.addItem(Cypress.env('otherCatProd1'))        
        cy.wait(1000)
        cy.addToCart()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added.')
        })
        cy.wait(1000)
        cy.goToHome()    
    })

    it('Validating the calculation of total amount', () => {
        cy.goToCart()
        
        let sum = 0
        cy.calcTotalPrice().each(($ele) => {
            sum += parseFloat($ele.text())
        })
        cy.log(sum)
        cy.returnTotal().invoke('text').then((text) => {
            expect(sum).to.equal(parseFloat(text))
        })
    })

    it('Validating successfull checkout', () => {
        cy.placeOrder()
        cy.fillCheckOutDetails(data.name, data.country, data.city, data.creditCard, data.month, data.year)
        cy.returnCheckoutConfirmationMessage().should('have.text', 'Thank you for your purchase!')
        cy.confirmCheckout()
    })

})