/// <reference types="cypress" />

class LoginPage
{


    fillEmail(value){
        const field = cy.get('.eSxLXo > .InlineForm__Container-sc-1r23z15-0 > .TextField__Container-sc-r5o2cn-0 > .TextField__InputWrapper-sc-r5o2cn-4 > .ui-reactv2-input')
        field.type(value)
        return this
    }
    fillPass(value){
        const field = cy.get('[name=password]')
        field.type(value)
        return this
    }
    logInButton(){
        const logInButton = cy.get('.Button__StyledDefaultButton-sc-44gl5i-0')
        logInButton.click()
    }
    singleSignOnButton(){
        const singleSignOnButton = cy.get('button.Tabs__Tab-sc-g2qocw-1.bySZsy')
        singleSignOnButton.click()
    }
    fillCompanyEmail(value){
        const fieldCE = cy.get('.TextField__InputWrapper-hGJUmT > .ui-reactv2-input')
        fieldCE.type(value)
        return this
    }
    continueButton(){
        const continueButton = cy.get('.lPbZx.kgvcZn.dkFlqp > form > button')
        continueButton.click()
    }
    checkButton(){
        const checkButton = cy.get('.CheckboxField_notChecked-tx-Z1syKWP > svg')
        checkButton.click()
    }
    emailNotif() {
        return cy.get('div.LoginForm__FieldContainer-kXONbt.eSxLXo > label > div > div.TextField__ErrorMessage-sc-r5o2cn-5.iFEVFt')   
    }
    passwordNotif() {
        return cy.get('div.LoginForm__FieldContainer-kXONbt.flxMbT > label > div > div.TextField__ErrorMessage-sc-r5o2cn-5.iFEVFt')   
    }
    Notif() {
        return cy.get('.cWfwZS > div > div')   
    }
    emailVisible() {
        return cy.get('.eSxLXo>.InlineForm__Container-sc-1r23z15-0>.TextField__Container-sc-r5o2cn-0>.TextField__InputWrapper-sc-r5o2cn-4>.ui-reactv2-input')   
    }
}

export default LoginPage