import ServicePage from "../support/PageObject/ServicePage"

describe('test Service page',()=>{

    const servicePage = new ServicePage()

    beforeEach('before all tests',()=>{
        cy.viewport('macbook-16')
        cy.visit('https://www.otorio.com/services/')

    })

    it('click on Contact us button',()=>{
        servicePage.contactUs().invoke('removeAttr', 'target').click()
        cy.url().should('contain','contact-us')
        
    })

    it('click on Industrial Cyber Security Services learn more button',()=>{

        servicePage.industrialCyberSecurityServicesLearnMoreButton().invoke('removeAttr', 'target').click()
        cy.url().should('contain','Brief.pdf')

    })


    it.only('Incident Response learn more button',()=>{
        servicePage.incidentResponseLearnMoreButton().click()
        cy.url().should('contain','breach')
    })

    






})