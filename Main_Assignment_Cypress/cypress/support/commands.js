// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import Signup from "../page_objects/Sign-up-Page"
import Signin from "../page_objects/Login-Page"
import Products from "../page_objects/Products-Page"
import Item from "../page_objects/Items-Page"
import CheckOut from "../page_objects/Check-out-Page"

Cypress.Commands.add('signup', (userName, password) => {
    const signUpPage = new Signup()
    signUpPage.newUserSignup()
    cy.wait(500)
    signUpPage.enterUserNameAndPassword(userName, password)
    signUpPage.submit()
    cy.wait(1000)
})

Cypress.Commands.add('signin', (userName, password) => {
    const signinPage = new Signin()
    signinPage.signIn()
    cy.wait(500)
    signinPage.enterUserNameAndPassword(userName, password)
    cy.wait(500)
    signinPage.submit()
    cy.wait(500)
})

Cypress.Commands.add('selectCategory', (category) => {
    const products = new Products()
    cy.wait(1000)
    products.selectCategory(category)
    cy.wait(1000)
})

Cypress.Commands.add('addItem', (item) => {
    cy.wait(500)
    const products = new Products()
    products.selectItem(item)
})

Cypress.Commands.add('addToCart', () => {
    const item = new Item()
    item.addToCart()
})

Cypress.Commands.add('goToHome', () => {
    const item = new Item()
    item.goTOHome()
})

Cypress.Commands.add('goToCart', () => {
    const product = new Products()
    product.goToCart()
    cy.wait(2000)
})

Cypress.Commands.add('calcTotalPrice', () => {
    const checkout = new CheckOut()
    checkout.calcTotalPrice()
})
Cypress.Commands.add('returnTotal', () => {
    const checkout = new CheckOut()
    checkout.returnTotal()
})


Cypress.Commands.add('fillCheckOutDetails', (name, country, city, creditCard, month, year) => {
    const checkout = new CheckOut()
    checkout.fillCheckOutDetails(name, country, city, creditCard, month, year)
})

Cypress.Commands.add('returnCheckoutConfirmationMessage', () => {
    const checkout = new CheckOut()
    return checkout.returnCheckoutConfirmationMessage()
})

Cypress.Commands.add('confirmCheckout', () => {
    const checkout = new CheckOut()
    checkout.confirmCheckout()
})

Cypress.Commands.add('placeOrder', () => {
    const checkout = new CheckOut()
    checkout.placeOrder()
})
Cypress.Commands.add('deleteItem', () => {
    const checkout = new CheckOut()
    checkout.deleteItem()
})
Cypress.Commands.add('getListTitleAllCheckout', () => {
    const checkout = new CheckOut()
    checkout.getListTitleAllCheckout()
})

