

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('.woocommerce-form > :nth-child(1) > label').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
    
});

