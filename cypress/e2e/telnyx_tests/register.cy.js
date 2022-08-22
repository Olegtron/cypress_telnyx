/// <reference types="cypress" />

import MainPage from '../telnyx_pageobjects/MainPage'
import SignUpPage from '../telnyx_pageobjects/SignUpPage'
import LoginPage from '../telnyx_pageobjects/LoginPage'
import AccountPage from '../telnyx_pageobjects/AccountPage'
import ProductPage from '../telnyx_pageobjects/ProductPage'
import ReleaseNotesPage from '../telnyx_pageobjects/ReleaseNotesPage'

describe('reg', () => {

    const random = Math.random().toString(36).substring(4,14);
    const mainPage = new MainPage()
    const signUpPage = new SignUpPage()
    const loginPage = new LoginPage()
    const accountPage = new AccountPage()
    const productPage = new ProductPage()
    const releaseNotesPage = new ReleaseNotesPage()

    it(
        'Registration with valid credentials',
        {
          retries: {
            runMode: 10,
            openMode: 10,
          },
        },
        () => {
            cy.visit('https://telnyx.com/')
            mainPage.acceptCookies()
            mainPage.signUpButton()

            signUpPage.fillEmail(random+"@gmail.com")
            signUpPage.fillName(random)
            signUpPage.fillPass(random+"A288a@")
            signUpPage.check()
            signUpPage.createAccButton()
    
            cy.wait(7000)
            cy.url().should('eq', 'https://telnyx.com/sign-up/verify-email/f')
            signUpPage.emailSendNotif().should('have.text', "We've sent you an email to activate your account")

            cy.clearCookies()
            cy.clearLocalStorage()
        }
      )

})