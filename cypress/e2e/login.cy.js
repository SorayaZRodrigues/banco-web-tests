describe('Login', () => {
  it('login com dados validos deve permitir entrada no sistema', () => {
    cy.visit('http://localhost:4000/')
    cy.get('#username').click().type('Julio.Lima')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()
  })
})