/// <reference types= "cypress" />
class HomePage{

    getSeeWayBtn(){
        return cy.get('.announcement-bar__inner a')
    }

    getDismissSeeWayBtn(){
        return cy.get('.announcement-bar__dismiss')
    }

    getLogoLink(){
        return cy.get('.logo img')
    }


    getResourcesNavBar(){
        return cy.get('.nav-link').contains('Resources')
    }

    
    getBlogNavBar(){
        return cy.get('.nav-link').contains('Blog')
    }

    getSearchIcon(){
        return cy.get('.bi-search')
    }

    getSearchInput(){
        return cy.get('#query')
    }

    getFlag(){
        return cy.get("img[alt='flag_US.png']")
    }

    germanFlag(){
        return cy.get("[alt='German']")
    }

    requestDemoBtnNavBar(){
        return cy.get('[class="btn red"]').contains('Request Demo')
    }

    requestDemoBtnNavRichContent(){
        return cy.get('.rich-content a').contains('Request demo')
    }


    sliderRightBtn(){
        return cy.get('[aria-label="Next"]')
    }

    sliderLeftBtn(){
        return cy.get('[aria-label="Previous"]')
    }

   IndustryLeadingPartnersSliderClass(){
       return cy.get('.h-partner-slider > .slick-list > .slick-track')
   }

   RAM2LearnMoreInnerImageLink(){
       return cy.get('.image-content__inner> a').eq(0)
   }

   ram2InnerImage(){
       return cy.get('.image-box > img').eq(0)
   }

   AutomatedRiskInnerImageLink(){
       return cy.get('.image-content__inner>a').eq(1)

   }

   AutomatedRiskInnerImage(){
        return cy.get('.image-box > img').eq(1)


   }

   OtorioInActionVideo(){
       return cy.get('[class="col col-12 col-md-6 col-lg-6"] > video')
   }

   OtorioInActionVideoYouTube(){
       return cy.contains('Watch the Video')
   }


   latestNewsClassElement(){
       return cy.get('.owl-stage')
   }

   latestNewsNextButton(){
       return cy.get('.owl-next')
   }
   latestNewsPreviousButton(){
       return cy.get('.owl-prev')
   }

   //end of the page links
   automatedRiskMonitoringLink(){
       return cy.contains('Automated Risk Monitoring')
   }

   automatedSecurityandComplianceLink(){
       return cy.contains('Automated Security and Compliance Assessment')
   }

   machineLifecycleRiskManagementLink(){
       return cy.contains('Machine Lifecycle Risk Management')
   }

   secureRemoteAccessLink(){
       return cy.contains('Secure Remote Access')
   }

   otSecurityServicesLink(){
       return cy.contains('OT-Security Services')
   }

   resourcesCenterLink(){
       return cy.contains('Resources Center')
   }

   blogLink(){
       return cy.contains('.footer-menu-link','Blog')
   }

   machineManufacturingLink(){
    return cy.contains('.footer-menu-link','Machine Manufacturing')
   }


   cyberConsultantsandAuditorsLink(){
    return cy.contains('.footer-menu-link','Cyber Consultants and Auditors')
   }

   maritimeandCommercialPortsLink(){
    return cy.contains('.footer-menu-link','Maritime and Commercial Ports')
   }

   foodandBeverageLink(){
    return cy.contains('.footer-menu-link','Food and Beverage')
   }

   PulpandPaperLink(){
    return cy.contains('.footer-menu-link','Pulp and Paper')
   }

   pharmaceuticalsLink(){
    return cy.contains('.footer-menu-link','Pharmaceuticals')
   }

   automotiveLink(){
    return cy.contains('.footer-menu-link','Automotive')
   }

   oilandGasLink(){
    return cy.contains('.footer-menu-link','Oil and Gas')
   }

   chemicalsLink(){
    return cy.contains('.footer-menu-link','Chemicals')
   }

   energyLink(){
    return cy.contains('.footer-menu-link','Energy')
   }

   aboutUsLink(){
    return cy.contains('.footer-menu-link','About Us')
   }

   leadershipLink(){
    return cy.contains('.footer-menu-link','Leadership')
   }

   careersLink(){
    return cy.contains('.footer-menu-link','Careers')
   }

   securityContactLink(){
    return cy.contains('.footer-menu-link','Security Contact')
   }

   pressReleaseLink(){
    return cy.contains('.footer-menu-link','Press Release')
   }

   newsLink(){
    return cy.contains('.footer-menu-link','News')
   }

   eventsLink(){
    return cy.contains('.footer-menu-link','Events')
   }

   privacyPolicy(){
    return cy.contains('.privacy-link','Privacy Policy')
   }

   termsAndConditions(){
    return cy.contains('.privacy-link','Terms & Conditions')
   }






}
export default HomePage