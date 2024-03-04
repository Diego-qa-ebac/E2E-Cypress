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

    

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //acesando a loja EBAC
        cy.login('diego.testee2e@gmail.com', 'teste1234')
        cy.get('#primary-menu > .menu-item-629 > a').click()
        //Adicionando o Produto 1 - pelo nome
        produtosPage.buscarProduto1('Aero Daily Fitness Tee')
        //Adicionando produto 2 - utilizando a barra de pesquisa
        produtosPage.buscarProduto2('Stellar Solar Jacket')
        //Adicionando produto 3 - usando variável
        let produto = ('Arcadio Gym Short')
        produtosPage.buscarProduto3(produto)
        //Adicionando produto 4 - usando interpolação
        produtosPage.buscarProduto4("atlas-fitness-tank")
        //Check out
        produtosPage.checkout()
        cy.get('.woocommerce-notice').should('contain', "Obrigado.")
    });

});
     
