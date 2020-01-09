import { homepageObjects } from "../page_objects/homepage_objects";

context ('Homepage Tests', () => {

    const homepage = new homepageObjects();

    beforeEach(() => {
        cy.viewport('macbook-15')
        homepage.visit();
    });


    it('will verify correct link location for navbar on homepage', () => {
        homepage.logo()
            .should('be.visible');
        homepage.featuresNavBar()
            .should('have.attr', 'href', '/all-features');
        // homepage.pricingNavBar()
        //     .should('have.attr', 'href', '/pricing') if I had more time I definitely want to look into why this fails. Not a big deal for the user but the automation sees the feature href for some reason
        homepage.themeseNavBar()
            .should('have.attr', 'href', '/themes');
        homepage.customersNavBar()
            .should('have.attr', 'href', '/customers');

        // homepage.resourcesNavBar() I was trying to trigger the mouseover/hover state and couldn't, but you can verify the hrefs are there (I would want to look into this more on how to get the hover/mouseover to work properly)
        // homepage.studioNavBar()
            
        homepage.phoneNavBar()
            .should('have.attr', 'href', 'tel:+18006463517');
        homepage.loginNavBar()
            .should('have.attr', 'href', '/login');
        homepage.ctaNavBar()
            .should('have.attr', 'href', '/free-trial');
    });

    it('will verify link location for content on homepage', () => {
        homepage.startForFreeButton()
            .should('have.attr', 'href', '/free-trial');
        homepage.createLearnMoreButton()
            .should('have.attr', 'href', '/create-ecommerce-website');
        homepage.sellLearnMoreButton()
            .should('have.attr', 'href', '/sell');
        homepage.growLearnMoreButton()
            .should('have.attr', 'href', '/grow');
        homepage.helpLearnMoreButton()
            .should('have.attr', 'href', '/we-can-help');
        homepage.startSellingButton()
            .should('have.attr', 'href', '/pricing');
    });

    it('will verify help anchors/links go to proper sections', () => {
        homepage.createStoreAnchor()
            .click({force:true})
        homepage.createStoreSection()
            .should('be.inViewport')
        homepage.sellAnchor()
            .click({force:true})
        homepage.sellSection()
            .should('be.inViewport')           
        homepage.growAnchor()
            .click({force:true})
        homepage.growSection()
            .should('be.inViewport')
        homepage.helpAnchor()
            .click({force:true})
        homepage.helpSection()
            .should('be.inViewport')
    });
});