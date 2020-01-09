export class loginPageObjects {
    visit() {
        return cy.visit('https://www.volusion.com/login')
    }

    emailField() {
        return cy.get('#email')
    }

    passwordField() {
        return cy.get('#p')
    }

    loginButton() {
        return cy.get('.login-submit-btn')
    }
}