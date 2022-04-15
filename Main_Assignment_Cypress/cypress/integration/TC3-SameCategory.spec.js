/// <reference types="Cypress" />

describe('Validating adding products of same category', { defaultCommandTimeout: 3000 }, () => {
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
        cy.wait(2000)    
        
    })
    it('validation Select 1st products and add it to cart', () => {
        cy.addItem(Cypress.env('sameCatProd1'))        
        cy.wait(2000)
        cy.addToCart()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added.')
        })
        cy.wait(1000)
        cy.goToHome()    
    })

    it('validation Select 2nd products and add it to cart', () => {
        cy.selectCategory(Cypress.env('sameCategory'))
        cy.addItem(Cypress.env('sameCatProd2'))        
        cy.wait(2000)
        cy.addToCart()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added.')
        })
        cy.wait(2000)
        cy.goToHome()    
    })

    it('Validate the total amount', () => {
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

    it('Validate the Thank you for Purchase popup message', () => {
        cy.placeOrder()
        cy.fillCheckOutDetails(data.name, data.country, data.city, data.creditCard, data.month, data.year)
        cy.returnCheckoutConfirmationMessage().should('have.text', 'Thank you for your purchase!')
        cy.confirmCheckout()
    })

})