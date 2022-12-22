// ***********************************************
import "cypress-real-events";
import "cypress-iframe";


// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
const compareSnapshotCommand = require('cypress-image-diff-js/dist/command')
compareSnapshotCommand()

Cypress.Commands.add('openNavBarLink',(navBarName,childText,urlInclud)=>{
    cy.get('.nav-item.hasChild').contains(navBarName).realHover()
    cy.contains(childText).invoke('removeAttr', 'target').click()
    cy.url().should('include',urlInclud)
})


Cypress.Commands.add('openLinkInSlider',(imgUrlorText,urlIncludeText)=>{
    cy.get(imgUrlorText).invoke('removeAttr', 'target').click()
    cy.url().should('include',urlIncludeText)
})


Cypress.Commands.add('signUpForDemo',(firstName,lastName,email,position,industry,country,phoneNumber,message)=>{
     //sign up button is missing because it's production environment 
    cy.get('#hs-form-iframe-0').its('0.contentDocument.body').then((dom)=>{
        cy.wrap(dom).find('[name="firstname"]').scrollIntoView().type(firstName)
        cy.wrap(dom).find('[name="lastname"]').type(lastName)
        cy.wrap(dom).find('[name="email"]').type(email)
        cy.wrap(dom).find('[name="jobtitle"]').type(position)
        cy.wrap(dom).find('#sector-9f30289d-abe0-4747-9295-8ba141af1561').select(industry)
        cy.wrap(dom).find('#countries-9f30289d-abe0-4747-9295-8ba141af1561').select(country)
        cy.wrap(dom).find('[name="phone"]').type(phoneNumber)
        cy.wrap(dom).find('[name="message"]').type(message)
        cy.wrap(dom).find('[name="LEGAL_CONSENT.subscription_type_9915654"]').click()
        

    })

   

   

})


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