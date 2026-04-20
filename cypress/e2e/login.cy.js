describe('Login', () => {
  it('login com dados validos deve permitir entrada no sistema', () => {
    //Arrange
    cy.visit('http://localhost:4000/')

    //Act
    cy.get('#username').click().type('Julio.Lima')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
})