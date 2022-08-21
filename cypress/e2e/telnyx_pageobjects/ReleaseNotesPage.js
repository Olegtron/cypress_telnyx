/// <reference types="cypress" />

class ReleaseNotesPage
{
fillSearch() {
    return cy.get('#search')
}
searchResuld() {
    return cy.get('section > h3')
}
}

export default ReleaseNotesPage