/// <reference types="cypress" />

class ProductPage
{
    elem1() {
        return cy.get('.gpIxXu > div > header:nth-child(1) > p')  //Voice Title
    }
    elem2() {
        return cy.get(':nth-child(2) > li:nth-child(1) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')  //Elastic SIP Trunking item
    }
    elem3() {
        return cy.get(':nth-child(2) > li:nth-child(2) > a > div.sc-d06c7197-4.fXEZdV > div > h2> span')      //Call Control item
    }
    elem4() {
        return cy.get(':nth-child(2) > li:nth-child(3) > a > div.sc-d06c7197-4.fXEZdV > div > h2> span')       //Outbound Calling item
    }
    elem5() {
        return cy.get(':nth-child(2) > li:nth-child(4) > a > div.sc-d06c7197-4.fXEZdV > div > h2> span')       //Telnyx Video API item
    }
    elem6() {
        return cy.get(':nth-child(2) > li:nth-child(5) > a > div.sc-d06c7197-4.fXEZdV > div > h2> span')      //Global Cloud Communications Platform item
    }
    elem7() {
        return cy.get(':nth-child(2) > li:nth-child(6) > a > div.sc-d06c7197-4.fXEZdV > div > h2> span')      //Direct Routing for Microsoft Teams item
    }
    elem8() {
        return cy.get(':nth-child(2) > li:nth-child(7) > a > div.sc-d06c7197-4.fXEZdV > div > h2> span')      //WebRTC item
    }
    elem9() {
        return cy.get(':nth-child(2) > li:nth-child(8) > a > div.sc-d06c7197-4.fXEZdV > div > h2> span')      //SHAKEN/ STIR item
    }
    elem10() {
        return cy.get(':nth-child(2) > li:nth-child(9) > a > div.sc-d06c7197-4.fXEZdV > div > h2> span')      //Branded Calling item
    }
    elem11() {
        return cy.get(':nth-child(3) > p') //Messaging title
    }
    elem12() {
        return cy.get(':nth-child(4) > li:nth-child(1) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')     //SMS item
    }
    elem13() {
        return cy.get(':nth-child(4) > li:nth-child(2) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')     //Short Code SMS item
    }
    elem14() {
        return cy.get(':nth-child(4) > li:nth-child(3) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')      //MMS item
    }
    elem15() {
        return cy.get(':nth-child(4) > li:nth-child(4) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')      //Toll-free SMS item
    }
    elem16() {
        return cy.get(':nth-child(4) > li:nth-child(5) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')     //WhatsApp Business API item
    }
    elem17() {
        return cy.get(':nth-child(4) > li:nth-child(6) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')      //A2P 10DLC item
    }
    elem18() {
        return cy.get(':nth-child(4) > li:nth-child(7) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')     //Alphanumeric Sender ID item
    }
    elem19() {
        return cy.get(':nth-child(5) > p')                                                                   //Fax title  
    }
    elem20() {
        return cy.get(':nth-child(6) > li > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')                //Fax API item
    }
    elem21() {
        return cy.get(':nth-child(7) > p')                                                                //Numbers title
    }
    elem22() {
        return cy.get(':nth-child(8) > li:nth-child(1) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')      //Global Numbers item
    }
    elem23() {
        return cy.get(':nth-child(8) > li:nth-child(2) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')     //Lookup API item
    }
    elem24() {
        return cy.get(':nth-child(8) > li:nth-child(3) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')    //Troll-Free Numbers item
    }
    elem25() {
        return cy.get(':nth-child(8) > li:nth-child(4) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')      //FastPort® item
    }
    elem26() {
        return cy.get(':nth-child(9) > p')                                                                   //Wireless title
    }
    elem27() {
        return cy.get(':nth-child(10) > li:nth-child(1) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')     //Wireless item
    }
    elem28() {
        return cy.get(':nth-child(10) > li:nth-child(2) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')    //Private Wireless Gateways item
    }
    elem29() {
        return cy.get(':nth-child(11) > p')                                                                //IDENTITY & DATA title
    }
    elem30() {
        return cy.get(':nth-child(12) > li:nth-child(1) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')    //Identity Services item
    }
    elem31() {
        return cy.get(':nth-child(12) > li:nth-child(2) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')    //Verify API item
    }
    elem32() {
        return cy.get(':nth-child(12) > li:nth-child(3) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')   //Call Routing Data item
    }
    elem33() {
        return cy.get(':nth-child(12) > li:nth-child(4) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')     //Switch Data item
    }
    elem34() {
        return cy.get(':nth-child(13) > p')                                                              //Networking title
    }
    elem35() {
        return cy.get(':nth-child(14) > li:nth-child(1) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')     //Virtual Cross Connects item
    }
    elem36() {
        return cy.get(':nth-child(14) > li:nth-child(2) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')     //Cloud VPN item
    }
    elem37() {
        return cy.get(':nth-child(14) > li:nth-child(3) > a > div.sc-d06c7197-4.fXEZdV > div > h2 > span')    //Storage item
    }
}

export default ProductPage