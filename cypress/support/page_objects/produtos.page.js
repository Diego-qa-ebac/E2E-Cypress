class ProdutosPage {


    
    visitarUrl() {
        cy.visit('minha-conta')
    }

    buscarProduto1(adicionarProduto1) {
        cy.get('.products > .row')
        .contains(adicionarProduto1)
        .click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.single_add_to_cart_button').click()
    }

    buscarProduto2(adicionarProduto2) {
        cy.get('[type="text"]').eq(1).type(adicionarProduto2)
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
        cy.wait(1000)
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()
        }   

    buscarProduto3(adicionarProduto3) {
        cy.get('[type="text"]').eq(1).type(adicionarProduto3)
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
        cy.wait(1000)
        cy.get('.button-variable-item-33').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(3)
        cy.get('.single_add_to_cart_button').click()
    }


    buscarProduto4(adicionarProduto4) {
    //cy.visit(`produtos/${adicionarProduto4}`)
    const urlformatada = adicionarProduto4.replace(/ /g, '-')
    cy.visit(`produtos/${urlformatada}`)
    cy.wait(1000)
    cy.get('.button-variable-item-M').click()
    cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
    cy.get('.input-text').clear().type(3)
    cy.get('.single_add_to_cart_button').click()
    }

    checkout(nome, sobrenome){
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
    cy.get('#billing_first_name').clear().type("Diego")  
    cy.get('#billing_last_name').clear().type("Portella")  
    cy.get('#billing_country_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow > b').click()
    .click()
    cy.get('#billing_address_1').clear().type("Rua dos QAs")
    cy.get('#billing_city').clear().type("Sâo Paulo")
    cy.get('#billing_postcode').clear().type("12345678")    
    cy.get('#billing_phone').clear().type("1112345678") 
    cy.wait(1000)
    cy.get('#terms').click()
    cy.get('#place_order').click()   
    }
}

export default new ProdutosPage()
