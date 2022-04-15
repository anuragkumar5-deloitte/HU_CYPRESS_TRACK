/// <reference types="Cypress" />

class Item{
    constructor(){
        this.addToCartSelector = '#tbodyid > div.row > div > a'
        this.homeSelector = '#navbarExample > ul > li.nav-item.active > a'
    }

    addToCart(){
        cy.get(this.addToCartSelector).click()
        return this
    }

    goTOHome(){
        cy.get(this.homeSelector).click()
        return this
    }

}

export default Item