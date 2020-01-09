import { loginPageObjects } from "../page_objects/login_page_objects";

context ('Login Page Tests', () => {

    const loginPage = new loginPageObjects();

    beforeEach(() => {
        cy.viewport('macbook-15')
        loginPage.visit()
    });

    it('will verify login flow from homepage', () => {
        loginPage.emailField().type('xevar69588@sammail.ws')
        loginPage.passwordField().type('Cypress123$')  // would not actually have this raw, maybe in a yaml or even outside of that depending
        loginPage.loginButton().click()
        cy.location().should((loc) => { // going forward in other tests you can just auth via API and you can assert that request comes back successful if you wanted

        expect(loc.href).to.eq('https://admin.volusion.com/dashboard')
        });
    })
});