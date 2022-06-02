/// <reference types="cypress" />

// context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })


  it('.type() - type into a DOM element', () => {
    cy.get('.new-todo').type('qwerty').should('have.value', 'qwerty')
    cy.get('.new-todo').type('{enter}')
  })
