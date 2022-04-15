/// <reference types="Cypress" />

class Products{
    constructor(){
        this.cartSelector = '#cartur'
        this.phoneCategorySelector = '#contcont > div > div.col-lg-3 > div > a:nth-of-type(2)'
        this.laptopsCategorySelector = '#contcont > div > div.col-lg-3 > div > a:nth-of-type(3)'
        this.monitorsCategorySelector = '#contcont > div > div.col-lg-3 > div > a:nth-of-type(4)'
        this.listOfProductsSelector = '#tbodyid > div > div > div > h4 > a'
    }

    selectCategory(category){
        if(category=="Phone"){
            cy.get(this.phoneCategorySelector).click()
            cy.wait(500)
        }
        else if(category == "Laptops"){
            cy.get(this.laptopsCategorySelector).click()
            cy.wait(500)
        }
        else if(category == "Monitors"){
            cy.get(this.monitorsCategorySelector).click()
            cy.wait(500)
        }
        return this
    }

    selectItem(itemName) {
        cy.get(this.listOfProductsSelector).each(($ele, index) => {
            const text = $ele.text()
            if(text == itemName){
                cy.get(this.listOfProductsSelector).eq(index).click()
            }
        })
        return this
    }

    goToCart() {
        cy.get(this.cartSelector).click()
        return this
    }

}

export default Products