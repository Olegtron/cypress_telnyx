/// <reference types="cypress" />

class SignUpPage
{
fillEmail(value){
    const field = cy.get('[id=email]')
    field.type(value)
    return this
}
fillName(value){
    const field = cy.get('[id=full_name]')
    field.type(value)
    return this
}
fillPass(value){
    const field = cy.get('[id=password]')
    field.type(value)
    return this
}
check(){
    const check = cy.get('div:nth-child(1) > div > div > svg > rect')
    check.click()
}
createAccButton(){
    const createAcc = cy.get('[type=submit]')
    createAcc.click()
}
emailError() {
    return cy.get('[id=email_error]')
}
passwordNotif1() {
    return cy.get('#password_requirements > div:nth-child(2)')
}
passwordNotif2() {
    return cy.get('#password_requirements > div:nth-child(3)')
}
passwordNotif3() {
    return cy.get('#password_requirements > div:nth-child(4)')
}
passwordNotif4() {
    return cy.get('#password_requirements > div:nth-child(5)')
}
emailSendNotif() {
    return cy.get('div.sc-62badcbb-0.gQAeUA > main > div > h1')
}
}

export default SignUpPage