class ProdutosPage {


    
    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto1(nomeProduto1) {
        cy.get('.products > .row')
        .contains(nomeProduto1).click()
        cy.wait(1000)
        cy.get('.button-variable-item-XS').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.wait(1000)
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()
        cy.wait(1000)
        cy.get('.dropdown-toggle > .mini-cart-items').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        
    }

    buscarProduto2(nomeProduto2) {
        cy.get('[name="s"]').eq(1).type(nomeProduto2)
        cy.get('.button-search').eq(1).click()
        cy.wait(1000)
        cy.get('.button-variable-item-34').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(3)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
    }   

    buscarProduto3(nomeProduto3) {
        cy.visit(`produtos/${nomeProduto3}`)
        cy.wait(1000)
        cy.get('.button-variable-item-M').click()
        cy.wait(1000)
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        
    }


    buscarProduto4(nomeProduto4) {
    var urlFormatada = nomeProduto4.replace(/ /g, '-') 
    cy.visit(`produtos/${urlFormatada}`)
    cy.wait(1000)
    cy.get('.button-variable-item-L').click()
    cy.wait(1000)
    cy.get('.button-variable-item-White').click()
    cy.wait(1000)
    cy.get('.input-text').clear().type(4)
    cy.get('.single_add_to_cart_button').click()    
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
    }

}

export default new ProdutosPage()