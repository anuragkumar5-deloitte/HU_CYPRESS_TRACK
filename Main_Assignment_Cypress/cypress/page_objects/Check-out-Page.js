/// <reference types="Cypress" />

class CheckOut{
    constructor(){
        this.priceListSelector = '#tbodyid > tr > td:nth-child(3)'
        this.totalSelector = '#totalp'
        this.placeOrderBtnSelector = '#page-wrapper > div > div.col-lg-1 > button'

        this.nameSelector = '#name'
        this.countrySelector = '#country'
        this.citySelector = '#city'
        this.creditCardSelector = '#card'
        this.monthSelector = "#month"
        this.yearSelector = "#year"

        this.purchaseBtnSelector = '#orderModal > div > div > div.modal-footer > button.btn.btn-primary'

        this.checkoutConfirmation = 'body > div.sweet-alert.showSweetAlert.visible > h2'
        this.checkoutConfirmButton = 'body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button'
    }

    fillCheckOutDetails(name, country, city, creditCard, month, year){
        cy.get(this.nameSelector).type(name)
        cy.wait(300)
        cy.get(this.countrySelector).type(country)
        cy.wait(300)
        cy.get(this.citySelector).type(city)
        cy.wait(300)
        cy.get(this.creditCardSelector).type(creditCard)
        cy.wait(300)
        cy.get(this.monthSelector).type(month)
        cy.wait(300)
        cy.get(this.yearSelector).type(year)
        cy.wait(300)
        cy.get(this.purchaseBtnSelector).click()
        cy.wait(1000)
        return this
    }

    returnCheckoutConfirmationMessage() {
        return cy.get(this.checkoutConfirmation)
    }

    confirmCheckout() {
        cy.get(this.checkoutConfirmButton).click()
    }

    calcTotalPrice() {
        return cy.get(this.priceListSelector)
    }

    returnTotal() {
        return cy.get(this.totalSelector)
    }

    placeOrder() {
        cy.get(this.placeOrderBtnSelector).click()
    }

}

export default CheckOut