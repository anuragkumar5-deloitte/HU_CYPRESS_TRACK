/// <reference types="Cypress" />

class Signup {
    constructor(){
        this.signupBtnSelector = '#signin2'
        this.userNameSlector = '#sign-username'
        this.passwordSelector = '#sign-password'
        this.signUpSubmitBtnSelector = '#signInModal > div > div > div.modal-footer > button.btn.btn-primary'
    }

    newUserSignup() {
        cy.get(this.signupBtnSelector).click()
        return this
    }

    enterUserNameAndPassword(userName, password){
        cy.get(this.userNameSlector).clear()
        if(userName != ''){
            cy.get(this.userNameSlector).type(userName)
            cy.wait(100)
        }
        cy.get(this.passwordSelector).clear()
        if(password != ''){
            cy.get(this.passwordSelector).type(password)
            cy.wait(100)
        }
        return this
    }

    submit(){
        cy.get(this.signUpSubmitBtnSelector).click()
        return this
    }
}

export default Signup