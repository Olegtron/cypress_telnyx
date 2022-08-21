/// <reference types="cypress" />

class AccountPage
{
    logInButton(){
        const logInButton = cy.get('.Button__StyledDefaultButton-sc-44gl5i-0')
        logInButton.click()
    }
    accHover(){
        const accHover = cy.get('div.Flex__FlexComponent-fGtahC.fmDnDf.tx-2c709E > div').invoke('show')
        accHover.click()
    }
    logoutButton(){
        const logoutButton = cy.get('div.ant-popover-inner > div > div > div > div > button')
        logoutButton.click()
    }
    loggedAs() {
        return cy.get('.mb-0.tx-eNruA > li:nth-child(1)')   
    }
}

export default AccountPage