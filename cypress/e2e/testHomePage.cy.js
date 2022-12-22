import HomePage from '../support/PageObject/HomePage'
/// <reference types= "cypress" />
/// <reference types= "cypress-iframe" />

import "cypress-real-events";


describe('test home page',()=>{
    const homePage = new HomePage()


    beforeEach('before all tests', () =>{
        cy.viewport('macbook-16')
        cy.visit('/') 

    })

    it('test see way button', ()=>{
        homePage.getSeeWayBtn().invoke('removeAttr', 'target').click()
        cy.get('#hs_cos_wrapper_widget_1620051882442_ ').should('contain.text', 'GigaOm:')


    })

    it('test dismiss see way button', ()=>{
        homePage.getDismissSeeWayBtn().click()
        homePage.getSeeWayBtn().should('be.hidden')
        

    })

    it('test logo link', ()=>{
        homePage.getLogoLink().click()
        cy.url().should('include', 'otorio.com')
    })

    it('open RAM²™ link from navBar', ()=>{
       cy.openNavBarLink('Products','RAM²','ram-continuous')
       
    })


    it('open spOT™ Assessment link from navBar', ()=>{
        cy.openNavBarLink('Products','spOT™ Assessment','spot-assessment')

     })

     it('open spOT™ Lifecycle link from navBar', ()=>{
      cy.openNavBarLink('Products','spOT™ Lifecycle','spot-lifecycle')
        
     })

     it('open remOT™ link from navBar', ()=>{
      cy.openNavBarLink('Products','remOT™','remot-secure')
        
     })

     it('open Noise reduction link from navBar', ()=>{
      cy.openNavBarLink('Solutions','Noise reduction','alert-fatigue')
      cy.contains('p','Helped an Oil Refinery').then(elementHeadline =>{
         const elementText = elementHeadline.text()
         expect(elementText).to.equal('How OTORIO Helped an Oil Refinery Eliminate Alert Fatigue')
      })


     })

     it('open Improve OT network link from navBar', ()=>{
      cy.openNavBarLink('Solutions','Improve OT network','energy-company')
        
     })

     it('open Bridge security and compliance gaps link from navBar', ()=>{
      cy.openNavBarLink('Solutions','Bridge security and compliance gaps','hydro-power-ti')
        
     })


     it('open Efficient offline cyber risks monitoring link from navBar', ()=>{
      cy.openNavBarLink('Solutions','Efficient offline cyber','auto-spot')
        
     })


     it('open Preventing ransomware and cyberattack link from navBar', ()=>{
      cy.openNavBarLink('Solutions','Preventing ransomware','manufacturing-ir')
        
     })


     it('open industries link from navBar', ()=>{
        cy.openNavBarLink('Solutions','Industries','industries')
          
       })
    
     it('open Energy link from navBar', ()=>{
        cy.openNavBarLink('Solutions','Energy','industries/energy')
          
       })

    it('open Machine Manufacturing link from navBar', ()=>{
       cy.openNavBarLink('Solutions','Machine Manufacturing','machine-manufacturing')
          
       })

    it('open Cyber Consultants and Auditors link from navBar', ()=>{
       cy.openNavBarLink('Solutions','Cyber Consultants and Auditors','cyber-consultants-and-auditors')
          
       })

    it('open Maritime and Commercial Ports link from navBar', ()=>{
       cy.openNavBarLink('Solutions','Maritime and Commercial Ports','maritime-and-commercial-ports')
           
        })
    it('open Food and Beverage link from navBar', ()=>{
       cy.openNavBarLink('Solutions','Food and Beverage','food-and-beverage')
                
        })

    it('open Pulp and Paper link from navBar', ()=>{
       cy.openNavBarLink('Solutions','Pulp and Paper','pulp-and-paper')
                     
        })


    it('open Pharmaceuticals link from navBar', ()=>{
       cy.openNavBarLink('Solutions','Pharmaceuticals','pharmaceuticals')
                          
        })

    it('open Automotive link from navBar', ()=>{
       cy.openNavBarLink('Solutions','Automotive','automotive')
                          
        })

    it('open Oil and Gas link from navBar', ()=>{
       cy.openNavBarLink('Solutions','Oil and Gas','oil-and-gas')
                          
        })
    it('open OT Security Services link from navBar', ()=>{
       cy.openNavBarLink('Solutions','OT Security Services','services')
                          
        })

    it('open About us link from navBar', ()=>{
       cy.openNavBarLink('Company','About us','about-us/')
                          
        })
    it('open Company link from navBar', ()=>{
       cy.openNavBarLink('Company','Company','about-us/')
                          
        })

    it("open OTORIO's Leadership link from navBar", ()=>{
       cy.openNavBarLink('Company',"OTORIO's Leadership",'leadership')
                               
        })
        
    it('open Careers link from navBar', ()=>{
       cy.openNavBarLink('Company','Careers','careers')
                               
        })
        
    it('open Media & Events link from navBar', ()=>{
       cy.openNavBarLink('Company','Media & Events','news-events')
                               
        })
        
    it('open Press Release link from navBar', ()=>{
       cy.openNavBarLink('Company','Press Release','news-events/news/')
                               
        })
        
    it('open News link from navBar', ()=>{
       cy.openNavBarLink('Company','News','news-events')
                               
        })
        
    it('open Events link from navBar', ()=>{
       cy.openNavBarLink('Company','Events','news-events/#')
                               
        })
        
    it('open Partner Log-In link from navBar', ()=>{
       cy.openNavBarLink('Partners','Partner Log-In','partners.otorio.com')
                               
        })
        
    it('open Become a Partner link from navBar', ()=>{
       cy.openNavBarLink('Partners','Become a Partner','become-an-otorio-partner')
                               
        })

    it("open Resources  link from navBar", ()=>{
        homePage.getResourcesNavBar().click()
        cy.url().should('include','resources')
    })

    it("open Blog link from navBar", ()=>{
        homePage.getBlogNavBar().click()
        cy.url().should('include','blog')
    })

    it('opem search bar', ()=>{
        homePage.getSearchIcon().click()
        homePage.getSearchInput().should('be.visible')
    })

    it('search RAM²™ in input field', ()=>{
        homePage.getSearchIcon().click()
        homePage.getSearchInput().type('RAM²™')
        homePage.getSearchIcon().click()
        
        cy.get('#spanSearchCount').then(resultText =>{
            let numOfResult = Number(resultText.text())
            cy.get('.search-results__card').then((elements)=>{
                expect(elements).lengthOf(numOfResult)
            })  
            
        })

    })

    it("chage language to german",() =>{
        homePage.getFlag().click()
        homePage.germanFlag().click()
        cy.get('.col-md-12 h1').should('contain.text','Vereinfachung der Cybersicherheit')
        cy.url().should('include','/de/')
    })

    it('click on request a demo link - nav bar', ()=>{
        homePage.requestDemoBtnNavBar().invoke('removeAttr', 'target').click()
        cy.url().should('include','/request-a-demo')
    })

    it('click on request a demo link - under headline', ()=>{
        homePage.requestDemoBtnNavRichContent().invoke('removeAttr', 'target').click()
        cy.url().should('include','/request-a-demo')
    })


    it('move Trusted by Industry slider to the right',()=>{
        
        homePage.IndustryLeadingPartnersSliderClass().should("have.attr",'style').should('contain', 'transform: translate3d(-1488px, 0px, 0px);')
        homePage.sliderRightBtn().click()
        homePage.sliderRightBtn().click()
        homePage.IndustryLeadingPartnersSliderClass().should("have.attr",'style').should('contain', 'transform: translate3d(-1860px, 0px, 0px);')

        

    })

    it('move Trusted by Industry slider to the left', ()=>{
        
        homePage.IndustryLeadingPartnersSliderClass().should("have.attr",'style').should('contain', 'transform: translate3d(-1488px, 0px, 0px);')
        homePage.sliderLeftBtn().click()
        homePage.IndustryLeadingPartnersSliderClass().should("have.attr",'style').should('contain', 'transform: translate3d(-1302px, 0px, 0px);')


    })

    it('Become a Cyber-Confident Industry slider move automaticliy', ()=>{
        cy.get("#industryslider>div>div:nth-child(2)>div>div>div>div>div").
        should("have.attr",'style').should('contain', 'translate3d(-2048px, 0px, 0px);')
        cy.wait(5000)
        cy.get("#industryslider>div>div:nth-child(2)>div>div>div>div>div").
        should("have.attr",'style').should('contain', 'translate3d(-3072px, 0px, 0px);')

    })
    

    it.only('add  Become a Cyber-Confident Industry slider links to new',()=>{
        
        var uniqueList = [];

        cy.get('.slide-button__link').each(($element) => {
          // Check if the element is not already in the list
          if (!uniqueList.includes($element.attr('href'))) {
            // If it's not in the list, add it to the list
            uniqueList.push($element.attr('href'));
          }
        }).then((d)=>{
            uniqueList.forEach((link)=>{
                cy.log(d)
                cy.visit(''+link)
                cy.url().should('include',link)
            })

        })
    
        

    })

   

    it('click on RAM2 Learn More Inner Image Link', ()=>{
        homePage.RAM2LearnMoreInnerImageLink().click()
        cy.url().should('include','ram-continuous-ot-cyber-security')

    })


    it('click on RAM2 Inner Image', ()=>{
        homePage.ram2InnerImage().click()
        cy.url().should('include','ram-continuous-ot-cyber-security')

    })

    it('click on Automated Risk Learn More Inner Image Link', ()=>{
        homePage.AutomatedRiskInnerImageLink().click()
        cy.url().should('include','spot-assessment-risk')

    })


    it('click on Automated Risk Learn More Inner Image', ()=>{
        homePage.AutomatedRiskInnerImage().click()
        cy.url().should('include','spot-assessment-risk')

    })


    it("Customer Testimonials images slider", ()=>{
        cy.get('.testimonials-content').scrollIntoView()

        cy.get('#slick-slide41').click()
        cy.get('.testimonials-slider-nav').screenshot()
        //when you switch sliders by radio button, text has chaged but image remain the same
        cy.get('[data-slide="slide2"]').should('have.attr','class').should('contain','active')

    })


    it("Play OTORIO in Action video", ()=>{
        homePage.OtorioInActionVideo()
        .then(($video=>{
            $video[0].play()
        }))
        homePage.OtorioInActionVideo().should('have.prop','paused', false)
        .should('have.prop','ended',false)
    })

    it('Play OTORIO in Action video on youtube',()=>{
        homePage.OtorioInActionVideoYouTube().invoke('removeAttr', 'target').click()

    })

    it('Move Latest News sliders to the right', ()=>{
        cy.contains('h2','Latest News').scrollIntoView()
        homePage.latestNewsClassElement()
        .should("have.attr",'style')
        .should('contain', 'transform: translate3d(0px, 0px, 0px);')
        homePage.latestNewsPreviousButton().should('not.be.disabled')
        homePage.latestNewsNextButton().click()
        homePage.latestNewsClassElement()
        .should("have.attr",'style')
        .should('contain', 'transform: translate3d(-406px, 0px, 0px);')
        cy.get('.owl-prev').should('be.visible')

    })

    it('Move Latest News sliders to the left', ()=>{
        cy.contains('h2','Latest News').scrollIntoView()
        homePage.latestNewsClassElement()
        .should("have.attr",'style')
        .should('contain', 'transform: translate3d(0px, 0px, 0px);')
        homePage.latestNewsNextButton().click()
        homePage.latestNewsNextButton().click()
        homePage.latestNewsPreviousButton().click()
        homePage.latestNewsPreviousButton().click()
        homePage.latestNewsPreviousButton().should('not.be.disabled')
        homePage.latestNewsClassElement()
        .should("have.attr",'style')
        .should('contain', 'transform: translate3d(0px, 0px, 0px);')

    })

    it("Move Latest News slider to the end", ()=>{
        Cypress._.times(21,()=>{
            cy.contains('h2','Latest News').scrollIntoView()
            homePage.latestNewsNextButton().click()

        })
        homePage.latestNewsNextButton().should('not.be.visible')
        homePage.latestNewsClassElement()
        .should("have.attr",'style')
        .should('contain', 'transform: translate3d(-8540px, 0px, 0px);')
    })


    // it.only('check',()=>{
    //     cy.get('[class="blog-post h-100"]>[class="btn"]').each(($link)=>{
    //         const url = $link.attr('href')
    //         if(!$link.is(':visible')){
    //             homePage.latestNewsNextButton().click()
    //             cy.wrap($link).invoke('removeAttr', 'target').click()
    //         }
    //         else{
    //             cy.wrap($link.removeAttr('target')).click()
    //         }
            
    //         cy.url().should('include',url)
    //         cy.visit('/')
            
    //         })
    //     })


    it('signup to demo', ()=>{
        cy.signUpForDemo('mmm','nnn','aabbcc@gmail.com','test','Telecommunications and Satellite','Israel','0554343334','test')
    })

    it("open automated risk monitoring link", ()=>{
        homePage.automatedRiskMonitoringLink().click()
        cy.url().should('contain', 'digital-risk-management-platform')
    })

    it('open Automated Securityand Compliance link', ()=>{
        homePage.automatedSecurityandComplianceLink().click()
        cy.url().should('contain','spot-assessment-risk-and-compliance')
    })

    it('open Machine Life Cycle Risk Management link', ()=>{
        homePage.machineLifecycleRiskManagementLink().click()
        cy.url().should('contain','machine-security-compliance-verification')
    })

    it('open Secure Remote Access link', ()=>{
        homePage.secureRemoteAccessLink().click()
        cy.url().should('contain','remot-secure-remote-access')
    })

    it('open Secure Remote Access link', ()=>{
        homePage.otSecurityServicesLink().click()
        cy.url().should('contain','services')
    })

    it('open resources center link', ()=>{
        homePage.resourcesCenterLink().click()
        cy.url().should('contain','resources')
    })

    it('open blog link', ()=>{
        homePage.blogLink().click()
        cy.url().should('contain','blog')
    })

    it('open blog link', ()=>{
        homePage.blogLink().click()
        cy.url().should('contain','blog')
    })

    it('open Machine Manufacturing link', ()=>{
        homePage.machineManufacturingLink().click()
        cy.url().should('contain','machine-manufacturing')
    })

    it('open Cyber Consultants and Auditors link', ()=>{
        homePage.cyberConsultantsandAuditorsLink().click()
        cy.url().should('contain','cyber-consultants-and-auditors')
    })


    it('open maritimeand Commercial Ports link', ()=>{
        homePage.maritimeandCommercialPortsLink().click()
        cy.url().should('contain','maritime-and-commercial-ports')
    })


    it('open food and Beverage link', ()=>{
        homePage.foodandBeverageLink().click()
        cy.url().should('contain','food-and-beverage')
    })


    it('open pulp and paper link', ()=>{
        homePage.PulpandPaperLink().click()
        cy.url().should('contain','pulp-and-paper')
    })

    it('open Pharmaceuticals link', ()=>{
        homePage.pharmaceuticalsLink().click()
        cy.url().should('contain','pharmaceuticals')
    })


    it('open automotive link', ()=>{
        homePage.automotiveLink().click()
        cy.url().should('contain','automotive')
    })

    it('open Oil and Gas link', ()=>{
        homePage.oilandGasLink().click()
        cy.url().should('contain','oil-and-gas')
    })


    it('open chemicals link', ()=>{
        homePage.chemicalsLink().click()
        cy.url().should('contain','chemicals')
    })

    it('open energy link', ()=>{
        homePage.energyLink().click()
        cy.url().should('contain','energy')
    })

    it('open about us link', ()=>{
        homePage.aboutUsLink().click()
        cy.url().should('contain','about-us')
    })

    it('open leadership link', ()=>{
        homePage.leadershipLink().click()
        cy.url().should('contain','#leadership')
    })

    it('open careers link', ()=>{
        homePage.careersLink().click()
        cy.url().should('contain','careers')
    })
    //not sure if the link lead to the right place
    // it.only('open Security Contact link', ()=>{
    //     homePage.securityContactLink()
    //     
    //     // cy.url().should('contain','')
    // })

    it('open press release link', ()=>{
        homePage.pressReleaseLink().click()
        cy.url().should('contain','news-events/news/')
    })

    it('open News link', ()=>{
        homePage.newsLink().click()
        cy.url().should('contain','news-events/#blog')
    })

    it('open event link', ()=>{
        homePage.eventsLink().click()
        cy.url().should('contain','#newsevent')
    })


    it('open privacy policy link', ()=>{
        homePage.privacyPolicy().click({force: true})
        cy.url().should('contain','privacy-policy')
    })

    it('open terms And Conditions link', ()=>{
        homePage.termsAndConditions().click({force: true})
        cy.url().should('contain','privacy-policy')
        //lead to privacy policy, it's ok?
    })





    
       


})

