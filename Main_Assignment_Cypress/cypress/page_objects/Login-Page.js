/// <reference types="Cypress" />

class Signin {
    constructor(){
        this.signInBtnSelector = '#login2'
        this.userNameSlector = '#loginusername'
        this.passwordSelector = '#loginpassword'
        this.signInSubmitBtnSelector = '#logInModal > div > div > div.modal-footer > button.btn.btn-primary'
    }

    signIn() {
        cy.get(this.signInBtnSelector).click()
        return this
    }

    enterUserNameAndPassword(userName, password){
        // cy.get(this.userNameSlector).clear()
        if(userName != ''){
            cy.get(this.userNameSlector).type(userName)
            cy.wait(500)
        }
        // cy.get(this.passwordSelector).clear()
        if(password != ''){
            cy.get(this.passwordSelector).type(password)
            cy.wait(500)
        }
        return this
    }

    submit(){
        cy.get(this.signInSubmitBtnSelector).click()
        return this
    }
}

export default Signin