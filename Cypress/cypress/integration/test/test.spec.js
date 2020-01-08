import { pageObjects } from "../page_objects/object_file";

context ('Testing things', () => {
    before(() => {
        cy.viewport('macbook-15')
        cy.visit('services/dev-ops/');
    });

    const page = new pageObjects();

    it('will verify text on SB main page', () => {
        page.testPageObject();
        cy.pause()
    })
});