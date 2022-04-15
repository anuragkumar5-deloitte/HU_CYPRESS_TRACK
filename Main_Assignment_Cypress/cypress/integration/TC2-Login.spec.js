/// <reference types="Cypress" />

describe('Validating signin', () => {
    let data
    before(() => {
        cy.fixture("wrong_credentials").then((cred) => {
            data = cred
        })
    })

    beforeEach(() => {
        cy.visit(Cypress.env('home_page_url')) 
    })

    it('Log-in with incorrect username and incorrect password', () => {
        cy.signin(data.wrongUserName, data.password)
        cy.on('window:alert', (str) => {
            expect(str).to.equal('User does not exist.')
        })
        cy.on('window:confirm', () => true)
    })
    
    it('Log-in with correct username and empty password', () => {
        cy.signin(Cypress.env('valid_user_name'), '')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')
        })
        cy.on('window:confirm', () => true)
    })

    it('Log-in with empty username and valid password.', () => {
        cy.signin('', Cypress.env('valid_password'))
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')
        })
        cy.on('window:confirm', () => true)
    })

    it('Login-Handles case sensitive  ', () => {
        cy.signin(Cypress.env('valid_user_name').toUpperCase(), Cypress.env('valid_password'))
        cy.on('window:alert', (str) => {
            expect(str).to.equal('User does not exist.')
        })
        cy.on('window:confirm', () => true)
    })

    it('Log-in with valid username and password', () => {
        cy.signin(Cypress.env('valid_user_name'), Cypress.env('valid_password'))
        cy.get('#nameofuser').should('have.text', 'Welcome '+Cypress.env('valid_user_name'))
    })

    
})