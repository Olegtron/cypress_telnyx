/// <reference types="cypress" />

import MainPage from '../telnyx_pageobjects/MainPage'
import SignUpPage from '../telnyx_pageobjects/SignUpPage'
import LoginPage from '../telnyx_pageobjects/LoginPage'
import AccountPage from '../telnyx_pageobjects/AccountPage'
import ProductPage from '../telnyx_pageobjects/ProductPage'
import ReleaseNotesPage from '../telnyx_pageobjects/ReleaseNotesPage'

describe('telnyx.com test suite', () => {
    afterEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    const random = Math.random().toString(36).substring(4,14);
    const mainPage = new MainPage()
    const signUpPage = new SignUpPage()
    const loginPage = new LoginPage()
    const accountPage = new AccountPage()
    const productPage = new ProductPage()
    const releaseNotesPage = new ReleaseNotesPage()

    it('Visibility of navigation bar elements', () => {

        cy.visit('https://telnyx.com/')
        mainPage.closeButton() //close alert window

        mainPage.navBarElem1().should('be.visible').should('have.text', 'Products')
        mainPage.navBarElem2().should('be.visible').should('have.text', 'Solutions')
        mainPage.navBarElem3().should('be.visible').should('have.text', 'Network')
        mainPage.navBarElem4().should('be.visible').should('have.text', 'Resources')
        mainPage.navBarElem5().should('be.visible').should('have.text', 'Company')
        mainPage.navBarElem6().should('be.visible').should('have.text', 'Pricing')
    })

    it('Visibility of footer elements', () => {
        cy.visit('https://telnyx.com/')

        mainPage.footerElem1().should('be.visible').should('have.text', 'Products')
        mainPage.footerElem2().should('be.visible').should('have.text', 'Elastic SIP Trunking ')
        mainPage.footerElem3().should('be.visible').should('have.text', 'Call Control - Voice API ')
        mainPage.footerElem4().should('be.visible').should('have.text', 'Programmable SMS ')
        mainPage.footerElem5().should('be.visible').should('have.text', 'WhatsApp API ')
        mainPage.footerElem6().should('be.visible').should('have.text', 'Secure Faxing ')
        mainPage.footerElem7().should('be.visible').should('have.text', 'Wireless - Cellular IoT ')
        mainPage.footerElem8().should('be.visible').should('have.text', 'Number Lookup ')
        mainPage.footerElem9().should('be.visible').should('have.text', 'Global Numbers ')
        mainPage.footerElem10().should('be.visible').should('have.text', 'Verify API ')
        mainPage.footerElem11().should('be.visible').should('have.text', 'See all Products ')
        mainPage.footerElem12().should('be.visible').should('have.text', 'Resources')
        mainPage.footerElem13().should('be.visible').should('have.text', 'Developer Docs ')
        mainPage.footerElem14().should('be.visible').should('have.text', 'Blog ')
        mainPage.footerElem15().should('be.visible').should('have.text', 'Resource Hub ')
        mainPage.footerElem16().should('be.visible').should('have.text', 'Release Notes ')
        mainPage.footerElem17().should('be.visible').should('have.text', 'Pricing')
        mainPage.footerElem18().should('be.visible').should('have.text', 'Elastic SIP Trunking Pricing ')
        mainPage.footerElem19().should('be.visible').should('have.text', 'SMS API Pricing ')
        mainPage.footerElem20().should('be.visible').should('have.text', 'Voice API Pricing ')
        mainPage.footerElem21().should('be.visible').should('have.text', 'Wireless Pricing ')
        mainPage.footerElem22().should('be.visible').should('have.text', 'Company')
        mainPage.footerElem23().should('be.visible').should('have.text', 'About Us ')
        mainPage.footerElem24().should('be.visible').should('have.text', 'Careers ')
        mainPage.footerElem25().should('be.visible').should('have.text', 'Data & Privacy ')
        mainPage.footerElem26().should('be.visible').should('have.text', 'Support Center ')
        mainPage.footerElem27().should('be.visible').should('have.text', 'Report Abuse ')
        mainPage.footerElem28().should('be.visible').should('have.text', 'Privacy Policy ')
        mainPage.footerElem29().should('be.visible').should('have.text', 'Cookie Policy ')
        mainPage.footerElem30().should('be.visible').should('have.text', 'Acceptable Use Policy ')
        mainPage.footerElem31().should('be.visible').should('have.text', 'Website Terms and Conditions ')
        mainPage.footerElem32().should('be.visible').should('have.text', 'Law Enforcement Request ')
        mainPage.footerElem33().should('be.visible').should('have.text', 'Mission Control')
        mainPage.footerElem34().should('be.visible').should('have.text', 'Sign up ')
        mainPage.footerElem35().should('be.visible').should('have.text', 'Log In ')
        mainPage.footerElem36().should('be.visible').should('have.text', 'Social')
        mainPage.footerElem37().should('be.visible').should('have.text', 'Connect on LinkedIn ')
        mainPage.footerElem38().should('be.visible').should('have.text', 'Follow on Twitter ')
        mainPage.footerElem39().should('be.visible').should('have.text', 'Follow on Facebook ')
    })

    it('Registration with valid credentials', () => {
        mainPage.signUpButton()

        signUpPage.fillEmail(random+"@gmail.com")
        signUpPage.fillName(random)
        signUpPage.fillPass(random+"A288a@")
        signUpPage.check()
        signUpPage.createAccButton()

        cy.wait(10000)
        cy.url().should('eq', 'https://telnyx.com/sign-up')
        signUpPage.emailSendNotif().should('have.text', "We've sent you an email to activate your account")
    })

    it('Registration with not valid credentials', () => {
        cy.visit('https://telnyx.com/')
        mainPage.signUpButton()

        signUpPage.fillEmail("abc")
        signUpPage.fillName("abc")
        signUpPage.fillPass("abc")
        signUpPage.createAccButton()

        signUpPage.emailError().should('be.visible').should('have.text', 'Please enter a valid email address.')
        signUpPage.passwordNotif1().should('be.visible').should('have.text', 'Be at least 12 characters long')
        signUpPage.passwordNotif2().should('be.visible').should('have.text', 'Contain at least one number')
        signUpPage.passwordNotif3().should('be.visible').should('have.text', 'Contain at least one symbol')
        signUpPage.passwordNotif4().should('be.visible').should('have.text', 'Contain at least one upper-case letter')

        cy.url().should('eq', 'https://telnyx.com/sign-up')
    })

    it('Login with valid credentials', () => {
        cy.visit('https://telnyx.com/')
        mainPage.logInButton()

        loginPage.fillEmail("kusoushimatta@gmail.com")
        loginPage.fillPass("000000000qQ@")
        loginPage.logInButton()

        cy.wait(6000)

        accountPage.accHover()
        accountPage.loggedAs().should('be.visible').should('have.text', 'Logged in as:kusoushimatta@gmail.com')
    })

    it('Login with not valid credentials', () => {
        cy.visit('https://telnyx.com/')

        mainPage.logInButton()

        loginPage.fillEmail("abc")
        loginPage.logInButton()

        loginPage.emailNotif().should('be.visible').should('have.text', 'Please enter a valid email address.')
        loginPage.passwordNotif().should('be.visible').should('have.text', 'Required')
    })

    it('Login through “Single Sign-on” with not registered email', () => {
        cy.visit('https://telnyx.com/')

        mainPage.logInButton()

        loginPage.singleSignOnButton()
        loginPage.fillCompanyEmail(random+"@gmail.com")
        loginPage.continueButton()

        loginPage.Notif().should('be.visible').should('have.text', 'The requested resource or URL could not be found.')
    })

    it('Remember my email address function check', () => {
        cy.visit('https://telnyx.com/')

        mainPage.logInButton()

        loginPage.fillEmail("kusoushimatta@gmail.com")
        loginPage.fillPass("000000000qQ@")
        loginPage.checkButton()
        loginPage.logInButton()

        cy.wait(6000)

        accountPage.accHover()
        accountPage.logoutButton()

        loginPage.emailVisible().should('be.visible').should('have.value','kusoushimatta@gmail.com')
    })

    it('Checking availability of all products on page', () => {
        cy.visit('https://telnyx.com/')

        mainPage.allProductsButton()

        productPage.elem1().should('be.visible').should('have.text', 'Voice')
        productPage.elem2().should('be.visible').should('have.text', 'Elastic SIP Trunking')
        productPage.elem3().should('be.visible').should('have.text', 'Call Control')
        productPage.elem4().should('be.visible').should('have.text', 'Outbound Calling')
        productPage.elem5().should('be.visible').should('have.text', 'Telnyx Video API')
        productPage.elem6().should('be.visible').should('have.text', 'Global Cloud Communications Platform')
        productPage.elem7().should('be.visible').should('have.text', 'Direct Routing for Microsoft Teams')
        productPage.elem8().should('be.visible').should('have.text', 'WebRTC')
        productPage.elem9().should('be.visible').should('have.text', 'SHAKEN/ STIR')
        productPage.elem10().should('be.visible').should('have.text', 'Branded Calling')
        productPage.elem11().should('be.visible').should('have.text', 'Messaging')
        productPage.elem12().should('be.visible').should('have.text', 'SMS')
        productPage.elem13().should('be.visible').should('have.text', 'Short Code SMS')
        productPage.elem14().should('be.visible').should('have.text', 'MMS')
        productPage.elem15().should('be.visible').should('have.text', 'Toll-Free SMS')
        productPage.elem16().should('be.visible').should('have.text', 'WhatsApp Business API')
        productPage.elem17().should('be.visible').should('have.text', 'A2P 10DLC')
        productPage.elem18().should('be.visible').should('have.text', 'Alphanumeric Sender ID')
        productPage.elem19().should('be.visible').should('have.text', 'Fax')
        productPage.elem20().should('be.visible').should('have.text', 'Fax API')
        productPage.elem21().should('be.visible').should('have.text', 'Numbers')
        productPage.elem22().should('be.visible').should('have.text', 'Global Numbers')
        productPage.elem23().should('be.visible').should('have.text', 'Lookup API')
        productPage.elem24().should('be.visible').should('have.text', 'Toll-Free Numbers')
        productPage.elem25().should('be.visible').should('have.text', 'FastPort®')
        productPage.elem26().should('be.visible').should('have.text', 'Wireless')
        productPage.elem27().should('be.visible').should('have.text', 'Wireless')
        productPage.elem28().should('be.visible').should('have.text', 'Private Wireless Gateways')
        productPage.elem29().should('be.visible').should('have.text', 'Identity & Data')
        productPage.elem30().should('be.visible').should('have.text', 'Identity Services')
        productPage.elem31().should('be.visible').should('have.text', 'Verify API')
        productPage.elem32().should('be.visible').should('have.text', 'Call Routing Data')
        productPage.elem33().should('be.visible').should('have.text', 'Switch Data')
        productPage.elem34().should('be.visible').should('have.text', 'Networking')
        productPage.elem35().should('be.visible').should('have.text', 'Virtual Cross Connects')
        productPage.elem36().should('be.visible').should('have.text', 'Cloud VPN')
        productPage.elem37().should('be.visible').should('have.text', 'Storage')
        })

    it('Release note search for specific criteria check', () => {
        cy.visit('https://telnyx.com/')

        mainPage.releaseNotesButton()
        releaseNotesPage.fillSearch().type('Cloud VPN: Now in Open Beta').type('{enter}')

        releaseNotesPage.searchResuld().should('be.visible').should('have.text', 'Cloud VPN: Now in Open Beta')
    })

})