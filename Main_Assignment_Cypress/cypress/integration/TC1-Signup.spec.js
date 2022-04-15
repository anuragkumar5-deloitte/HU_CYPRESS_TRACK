/// <reference types="Cypress" />


describe('Validating Signup', () => {
    let data
    before(() => {
        cy.fixture("wrong_credentials").then((cred) => {
            data = cred
        })
    })

    beforeEach(() => {
        cy.visit(Cypress.env('home_page_url')) 
    })

    it('Validating Registration with invalid Email-id', () => {
        cy.signup(data.duplicateUserName, data.password)
        cy.on('alert', (str) => {
            expect(str).to.equal('This user already exist.')
        })
    })

    it('Validating Registration with empty Email-id', () => {
        cy.signup('', data.password)
        cy.on('alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')
        })
    })

    it('Validating Registration with empty password', () => {
        cy.signup(data.duplicateUserName, '')
        cy.on('alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')
        })
    })

    it('Validating Registration with empty Email-id & password', () => {
        cy.signup('', '')
        cy.on('alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')
        })
    })

    it('Validating Registration-Sign-in', () => {
        cy.signup(Cypress.env('valid_user_name'), Cypress.env('valid_password'))
        cy.on('alert', (str) => {
            expect(str).to.equal('Sign up successful.')
        })
    })
})