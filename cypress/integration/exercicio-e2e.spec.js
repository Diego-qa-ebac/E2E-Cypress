/// <reference types="cypress" />
import produtosPage from "../support/page_objects/produtos.page";
import { faker } from '@faker-js/faker';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos 
        Adicionando ao carrinho 
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    afterEach(() => {
        //Página do cadastro / Checkout
        cy.get('#billing_first_name').type(faker.person.firstName())
        cy.get('#billing_last_name').type(faker.person.lastName())
        cy.get('#billing_company').type(faker.company.name())
        cy.get('#billing_address_1').type(faker.location.streetAddress())
        cy.get('#billing_city').type(faker.location.state())
        cy.get('#billing_postcode').type(faker.location.zipCode('12345678'))
        cy.get('#billing_phone').type(faker.phone.imei())
        cy.get('#billing_email').type(faker.internet.email())
        cy.get('#createaccount').click()
        cy.get('#account_password').type(faker.internet.password())
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain','Obrigado. Seu pedido foi recebido.')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //Produto 1 - Buscando produto pelo nome
        produtosPage.buscarProduto1('Atlas Fitness Tank')
    
     });

    it('Buscando produto usando variável', () => {
        var produto = 'Apollo Running Short'
        produtosPage.buscarProduto2(produto)
        

    });

    it('Buscando produto usando interpolação', () => {
        produtosPage.buscarProduto3('Autumn-Pullie')

       
    });

    it('Buscando produto usando Replace', () => {
        produtosPage.buscarProduto4('Cassia Funnel Sweatshirt')


    });

});
     
