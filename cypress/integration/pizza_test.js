describe('Navigation', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/')
    })
    it('Make an order button exists and is clickable', () => {
        cy.get('button.md-button')
            .click()
    })

})
describe('Inputs', () => {
    it('Can find name field, and input a test name', () => {
        cy.get('input[name=name')
            .type('Test Person')
            .should('have.value', 'Test Person')
    })
})