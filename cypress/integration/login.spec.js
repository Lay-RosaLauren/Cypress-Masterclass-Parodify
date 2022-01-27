/// <reference types="cypress" />
import auth from '../support/actions/AuthActions'

describe('Login', function () {
    it('User should be logged in', function () {
        auth.go()
        auth.fillForm('papito@qa.ninja', 'pwd123')
        auth.submit()

        auth.userShouldLoggedIn()
        //esses comandos são do Commands(não vamos usar no momento)
        //cy.goToLogin()
        //cy.signIn('papito@qa.ninja', 'pwd123')
        //cy.userShouldLoggedIn()
    })
    it('Invalid password', function() {
        auth.go()
        auth.fillForm('papito@qa.ninja', '123456')
        auth.submit()

        auth.alert().should('contain', 'Oops! Email e/ou senha incorretos.')
    })
    it('Invalid email', function() {
        auth.go()
        auth.fillForm('papito@404.com.br', 'pwd123')
        auth.submit() 

        auth.alert().should('contain', 'Oops! Email e/ou senha incorretos.')
    } )
})
