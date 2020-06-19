describe('Navigation', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/')
    })
    it('Make an order button exists and is clickable', () => {
        cy.get('button.md-button')
            .click()
    })

})

describe('Submit button initially disabled', () => {
    it('disabled submit button', () => {
        cy.get('button')
            .should('be.disabled')
    })
})
describe('Inputs', () => {
    it('Can find name field, and input a test name', () => {
        cy.get('input[name=name')
            .type('Test Person')
            .should('have.value', 'Test Person')
    })

    it('can select size and sauce', () => {
        cy.get('select[name=size]')
            .select('small')
        cy.get('select[name=sauce]')
            .select('marinara')
    })

    it('Can select multiple toppings', () => {
        cy.get('input[name=pepperoni]')
            .click()
            .should('have.value', 'on')
        cy.get('input[name=sausage]')
            .click()
            .should('have.value', 'on')
        cy.get('input[name=canadianBacon]')
            .click()
            .should('have.value', 'on')
    })
})

describe('Submit button', () => {
    it('enabled submit button', () => {
        cy.get('button')
            .should('be.enabled')
            .click()
    })
})