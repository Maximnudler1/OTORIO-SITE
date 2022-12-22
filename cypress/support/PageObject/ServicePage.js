class ServicePage{

    contactUs(){
        return cy.contains('.btn','Contact us')
    }

    industrialCyberSecurityServicesLearnMoreButton(){
        return cy.get('#actionbox a')
    }

    incidentResponseLearnMoreButton(){
        return cy.get('#serviceinfo a').eq(1)
    }

}

export default ServicePage