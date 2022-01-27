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

//Exemplos de Commands
//Cypress.Commands.add('goToLogin', () => {
    //cy.viewport(1920, 1080)
    //cy.visit('https://parodify.herokuapp.com/users/sign_in')
    // checkpoint
    //cy.get('#new_user').should('be.visible')
//})

//Cypress.Commands.add('signIn', (email, password) => {
    //cy.get('#user_email').type(email)
    //cy.get('#user_password').type(password)
    //cy.get('input[value="Log in"]').click()
//})

//Cypress.Commands.add('userShouldLoggedIn', () => {
    //cy.get('nav[class*="is-fixed-top"] a')
      //.should('have.attr', 'href', '/users/sign_out')
//})