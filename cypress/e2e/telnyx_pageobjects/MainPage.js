/// <reference types="cypress" />

class MainPage
{
//Buttons
closeButton(){
    const closeButton = cy.get('.Times_svg__svg-inline--fa')
    closeButton.click()
}
signUpButton(){
    const signUpButton = cy.get('li:nth-child(2) > div > a')
    signUpButton.click()
}
logInButton(){
    const logInButton = cy.get('a:nth-child(4)')
    logInButton.click()
}
allProductsButton(){
    const allProductsButton = cy.get('li:nth-child(1) > div > div > div.sc-7b3980dc-8.iWLbyI > div.sc-7b3980dc-10.hsvoTZ > a > span')
    allProductsButton.click({force: true})
}
releaseNotesButton(){
    const releaseNotesButton = cy.get('div:nth-child(2) > div > ul > li:nth-child(4) > a > span > span')
    releaseNotesButton.click()
}

//Navigation Bar elements
navBarElem1() {
    return cy.get('li:nth-child(1) > span > span')  //Products item
}
navBarElem2() {
    return cy.get('li:nth-child(3) > span > span')  //Solutions item
}
navBarElem3() {
    return cy.get('li:nth-child(5) > span > a')    //Network item
}
navBarElem4() {
    return cy.get('li:nth-child(6) > span > span')  //Resources item
}
navBarElem5() {
    return cy.get('li:nth-child(8) > span > span')  //Company item
}
navBarElem6() {
    return cy.get('li:nth-child(10) > span > span') //Pricing item
}

//Footer elements
footerElem1() {
    return cy.get('div.sc-7b6c9f9b-3.iznSjj > div > div:nth-child(1) > div > p')           //Products title
}
footerElem2() {
    return cy.get('div:nth-child(1) > div > ul > li:nth-child(1) > a > span > span')        //Elastic SIP Trunking item
}
footerElem3() {
    return cy.get('div:nth-child(1) > div > ul > li:nth-child(2) > a > span > span')       //Call Control - Voice API item
}
footerElem4() {
    return cy.get('div:nth-child(1) > div > ul > li:nth-child(3) > a > span > span')        //Programmable SMS item
}
footerElem5() {
    return cy.get('div:nth-child(1) > div > ul > li:nth-child(4) > a > span > span')        //WhatsApp API item
}
footerElem6() {
    return cy.get('div:nth-child(1) > div > ul > li:nth-child(5) > a > span > span')        //Secure Faxing item
}
footerElem7() {
    return cy.get('div:nth-child(1) > div > ul > li:nth-child(6) > a > span > span')       //Wireless - Cellular IoT item
}
footerElem8() {
    return cy.get('div:nth-child(1) > div > ul > li:nth-child(7) > a > span > span')        //Number Lookup item
}
footerElem9() {
    return cy.get('div:nth-child(1) > div > ul > li:nth-child(8) > a > span > span')       //Global Numbers item
}
footerElem10() {
    return cy.get('div:nth-child(1) > div > ul > li:nth-child(9) > a > span > span')       //Verify API item
}
footerElem11() {
    return cy.get('div:nth-child(1) > div > ul > li:nth-child(10) > a > span > span')      //See all Products item
}
footerElem12() {
    return cy.get('div.sc-7b6c9f9b-3.iznSjj > div > div:nth-child(2) > div > p')         //Resources title
}
footerElem13() {
    return cy.get('div:nth-child(2) > div > ul > li:nth-child(1) > a > span > span')        //Developer Docs item
}
footerElem14() {
    return cy.get('div:nth-child(2) > div > ul > li:nth-child(2) > a > span > span')        //Blog item
}
footerElem15() {
    return cy.get('div:nth-child(2) > div > ul > li:nth-child(3) > a > span > span')        //Resource Hub item
}
footerElem16() {
    return cy.get('div:nth-child(2) > div > ul > li:nth-child(4) > a > span > span')        //Release Notes item
}
footerElem17() {
    return cy.get('div.sc-7b6c9f9b-3.iznSjj > div > div:nth-child(3) > div > p')          //Pricing title
}
footerElem18() {
    return cy.get('div:nth-child(3) > div > ul > li:nth-child(1) > a > span > span')        //Elastic SIP Trunking Pricing item
}
footerElem19() {
    return cy.get('div:nth-child(3) > div > ul > li:nth-child(2) > a > span > span')        //SMS API Pricing item
}
footerElem20() {
    return cy.get('div:nth-child(3) > div > ul > li:nth-child(3) > a > span > span')       //Voice API Pricing item
}
footerElem21() {
    return cy.get('div:nth-child(3) > div > ul > li:nth-child(4) > a > span > span')        //Wireless Pricing item
}
footerElem22() {
    return cy.get('div.sc-7b6c9f9b-3.iznSjj > div > div:nth-child(4) > div > p')            //Company title
}
footerElem23() {
    return cy.get('div:nth-child(4) > div > ul > li:nth-child(1) > a > span > span')         //About Us item
}
footerElem24() {
    return cy.get('div:nth-child(4) > div > ul > li:nth-child(2) > a > span > span')         //Careers item
}
footerElem25() {
    return cy.get('div:nth-child(4) > div > ul > li:nth-child(3) > a > span > span')        //Data & Privacy item
}
footerElem26() {
    return cy.get('div:nth-child(4) > div > ul > li:nth-child(4) > a > span > span')        //Support Center item
}
footerElem27() {
    return cy.get('div:nth-child(4) > div > ul > li:nth-child(5) > a > span > span')         //Report Abuse item
}
footerElem28() {
    return cy.get('div:nth-child(4) > div > ul > li:nth-child(6) > a > span > span')         //Privacy Policy item
}
footerElem29() {
    return cy.get('div:nth-child(4) > div > ul > li:nth-child(7) > a > span > span')         //Cookie Policy item
}
footerElem30() {
    return cy.get('div:nth-child(4) > div > ul > li:nth-child(8) > a > span > span')         //Acceptable Use Policy item
}
footerElem31() {
    return cy.get('div:nth-child(4) > div > ul > li:nth-child(9) > a > span > span')         //Website Terms and Conditions item
}
footerElem32() {
    return cy.get('div:nth-child(4) > div > ul > li:nth-child(10) > a > span > span')        //Law Enforcement Request item
}
footerElem33() {
    return cy.get('div.sc-7b6c9f9b-3.iznSjj > div > div:nth-child(5) > div > p')         //Mission Control title    
}
footerElem34() {
    return cy.get('div:nth-child(5) > div > ul > li:nth-child(1) > a > span > span')         //Sign up item
}
footerElem35() {
    return cy.get('div:nth-child(5) > div > ul > li:nth-child(2) > a > span > span')         //Log In item
}
footerElem36() {
    return cy.get('div.sc-7b6c9f9b-3.iznSjj > div > div:nth-child(6) > div > p')         //Social title   
}
footerElem37() {
    return cy.get('div:nth-child(6) > div > ul > li:nth-child(1) > a > span > span')        //Connect on LinkedIn item
}
footerElem38() {
    return cy.get('div:nth-child(6) > div > ul > li:nth-child(2) > a > span > span')        //Follow on Twitter item
}
footerElem39() {
    return cy.get('div:nth-child(6) > div > ul > li:nth-child(3) > a > span > span')         //Follow on Facebook item
}
}

export default MainPage