describe('My First Test', () => {
    it('Does not do much!', () => {
      cy.visit('/');

      const button = cy.get('.button-count');

      button.should('have.text', 'count is: 0')
      button.click();
      button.should('have.text', 'count is: 1')
    })
  })
