export class homepageObjects {
    visit() {
        return cy.visit('https://www.volusion.com/')
    }

    logo() {
        return cy.get('[data-adata=navigation_link_Ecommerce-Software-by-Volusion-img]')
    }
    featuresNavBar() {
        return cy.get('[data-adata=navigation_features]') // attribute missing _link if that matters -i also would prob want visual verification for placement of the nav bar
    }

    pricingNavBar() {
        return cy.get('[data-adata=navigation_pricing_link]')
    }

    themeseNavBar() {
        return cy.get('[data-adata=navigation_themes_link]')
    }

    customersNavBar() {
        return cy.get('[data-adata=navigation_customers_link]')
    }

    resourcesNavBar() {
        return cy.get('[data-adata=navigation_resources_link]')
    }

    studioNavBar() {
        return cy.get('[data-adata=navigation_studio_link]')
    }

    phoneNavBar() {
        return cy.get('[data-adata=link_1-800-646-3517]')
    }

    loginNavBar() {
        return cy.get('[data-adata=navigation_link_login]')
    }

    ctaNavBar() {
        return cy.get('[data-adata=navigation_link_try-it-free]') // would probably just try to set an attribute that is more generic due to a/b serving
    }

    startForFreeButton() {
        return cy.get('[data-adata=link_start-for-free]')
    }
    callButton() {
        return cy.get('[data-adata=link_call-5122155603]')
    }

    chatButton() {
        return cy.get('[data-adata=link_Chat-with-an-expert-img]')
    }

    pricingPlansButton() {
        return cy.get('[data-adata=link_view-pricing-plan]')
    }

    createLearnMoreButton() {
        return cy.get('[data-adata=link_learn_more_create]')
    }

    sellLearnMoreButton() {
        return cy.get('[data-adata=link_learn_more_sell]')
    }

    growLearnMoreButton() {
        return cy.get('[data-adata=link_learn_more_grow]')
    }

    helpLearnMoreButton() {
        return cy.get('[data-adata=link_learn_more_help]')
    }

    startSellingButton() {
        return cy.get('[data-adata=link_pricing]')
    }

    createStoreAnchor() {
        return cy.get('[data-adata=link_create_your_store]').first() //Cypress picks up both elements from Desktop and Mobile
    }

    sellAnchor() {
        return cy.get('[data-adata=link_sell_your_products]').first()
    }

    growAnchor() {
        return cy.get('[data-adata=link_grow_your_business]').first()
    }

    helpAnchor() {
        return cy.get('[data-adata=link_we_can_help]').first()
    }

    createStoreSection() {
        return cy.get('.section-create-store') // suggest diff attribute instead of using the class just for consistency
    }

    sellSection() {
        return cy.get('.section-sell-products')
    }

    growSection() {
        return cy.get('.section-grow')
    }

    helpSection() {
        return cy.get('.section-support')
    }
}