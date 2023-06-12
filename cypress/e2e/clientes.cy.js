import realizarLogin from '../support/commands'

describe('clientes', () => {

    beforeEach(() => {
        // Parte que vai acessar a aplicação
        // verificar se está na página correta 'inovaFactory'
        cy.visit('/')
        cy.url().should('include', 'https://inovafactory.com.br/sistema/public/')

        // Comenado para realizar o login
        cy.realizarLogin();
    });

    it.only('Visualizar a página de clientes', () => {

        // Abrindo a seção de opções
        /* cy.get('[class="bi bi-list toggle-sidebar-btn"]')
            .click();

        // Selecionado a opção de 'Clientes'
        cy.get('[class="bi bi-list toggle-sidebar-btn"]')
            .click();
        */
        cy.get('[class="nav-link collapsed"]')
            .first()
            .click()

        // Validando se está na tela correta 'Clientes'
        cy.get('[class="text-dark"]')
            .should('have.text', 'Clientes')


    });

    it('Visualizar detalhes de uma cliente', () => {
        cy.acessarClientes()

        // Acessando os detalhes do cliente 'Dados Gerais'
        cy.get('[class="bi bi-eye"]')
            .first()
            .click()

        // Contatos
        cy.get('[class="nav-link"]')
            .first()
            .click()

        // Validar se existe whatsapp == Número
        cy.get('#customer-contacts > :nth-child(3) > .col-lg-3')
            .should('have.text', 'Whatsapp')
            .wait(2000)

        // Responsável
        cy.get('[class="nav-link"]')
            .last()
            .click()

        // Validando se existe CPF
        cy.get('#customer-responsable > :nth-child(2) > .col-lg-3')
            .should('have.text', 'CPF')
            .wait(2000)
    });

    afterEach(() => {
        // Commando para sair da conta no final do cenário
        cy.logout();
    });

});