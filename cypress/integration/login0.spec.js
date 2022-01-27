/// <reference types="cypress" />

describe('Login', function () {
    it('User should be logged in', function () {
        cy.viewport(1920, 1080)
        cy.visit('https://parodify.herokuapp.com/users/sign_in')
        // checkpoint
        cy.get('#new_user').should('be.visible')

        cy.get('#user_email').type('papito@qa.ninja')
        cy.get('#user_password').type('pwd123')
        cy.get('input[value="Log in"]').click()

        cy.get('nav[class*="is-fixed-top"] a')
          .should('have.attr', 'href', '/users/sign_out')
    })
    it('Invalid password', function() {
        cy.viewport(1920, 1080)
        cy.visit('https://parodify.herokuapp.com/users/sign_in')
        // checkpoint
        cy.get('#new_user').should('be.visible')

        cy.get('#user_email').type('papito@qa.ninja')
        cy.get('#user_password').type('123456')
        cy.get('input[value="Log in"]').click()

        cy.get('.message-body')
          .should('contain', 'Oops! Email e/ou senha incorretos.')
    })
    it('Invalid email', function() {
        cy.viewport(1920, 1080)
        cy.visit('https://parodify.herokuapp.com/users/sign_in')
        // checkpoint
        cy.get('#new_user').should('be.visible')

        cy.get('#user_email').type('papito@404.com.br')
        cy.get('#user_password').type('pwd123')
        cy.get('input[value="Log in"]').click()

        cy.get('.message-body')
          .should('contain', 'Oops! Email e/ou senha incorretos.')
    } )
})
