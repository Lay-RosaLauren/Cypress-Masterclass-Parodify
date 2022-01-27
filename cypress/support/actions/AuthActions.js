/// <reference types="cypress" />
class AuthActions {
    //construtor() {
        //this.logoutButton = 'nav[class*="is-fixed-top"] a'
    //}
    go() {
        cy.viewport(1920, 1080)
        cy.visit('https://parodify.herokuapp.com/users/sign_in')
        // checkpoint
        cy.get('#new_user').should('be.visible')
    }

    fillForm(email, password) {
        cy.get('#user_email').type(email)
        cy.get('#user_password').type(password)
    }

    submit() {
        cy.get('input[value="Log in"]').click()
    }

    alert() {
        return cy.get('.message-body')
    }

    userShouldLoggedIn() {
        cy.get('nav[class*="is-fixed-top"] a')
          .should('have.attr', 'href', '/users/sign_out')
    }
    
    //doLogout() {
        //cy.get(this.logoutButton).click()
    //}
}

export default new AuthActions()
