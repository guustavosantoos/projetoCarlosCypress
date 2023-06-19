import realizarLogin from '../support/commands';
import { faker } from '@faker-js/faker';

const phoneNumber   = faker.phone.number();
const rame          = faker.company.buzzPhrase();

describe('clientes', () => {

    beforeEach(() => {
        // Parte que vai acessar a aplicação
        // verificar se está na página correta 'inovaFactory'
        cy.visit('/')
        cy.url().should('include', 'https://inovafactory.com.br/sistema/public/')

        // Comenado para realizar o login
        cy.realizarLogin();
    });

    it('Visualizar informações de um cliente', () => {

        cy.get('[class="nav-link collapsed"]')
            .first()
            .click()

        // Validando se está na tela correta 'Clientes'
        cy.get('[class="text-dark"]')
            .should('have.text', 'Clientes')

        // Campo para buscar por nome do cliente
        cy.get('[name="fantasy_name"]')
            .type('Cremin-West', {force:true})

        // Clicar em 'Pesquisar'
        cy.get('[class="btn btn-secondary btn-sm"]')
            .first()
            .click({force:true})

        // Verificando se o resultado foi o mesmo 
        // do nome pesquisado
        cy.xpath('//*[@id="main"]/section[3]/div/div/div/div/div/div/div/table/tbody/tr/td[2]')
            .should('have.text', 'Cremin-West')

        // Abrindo os detalhes do cliente
        cy.get('[class="btn btn-secondary btn-sm"]')
            .last()
            .click()

        // Verificando se está na página de informações do cliente 
        cy.get('[class="card-title"]')
            .first()
            .should('have.text', 'Informações')

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

    it.only('Adicionando novo cliente na lista', () => {
        
        cy.acessarClientes()

        // btn Cadastra novo cliente
        cy.get('[class="btn btn-primary"]')
            .click({force:true})
    
        // Verificar se está na página correta 
        // 'Dados Gerais'
        cy.get('[class="card-title"]')
            .should('be.visible')
        
        // Selecionando o Tipo de Cliente
        cy.get('[class="form-select"][name="customer_type"]')
            .select('Pessoa Fisíca', {force:true})
    
        // Status
        cy.get('[name="status"]')
            .select('Ativo', {force:true})

        // CNPJ
        cy.get('[name="cnpj"]')
            .type('96.368.137/0001-72', {force:true})

        // Nome
        cy.get('[name="fantasy_name"]')
            .type('Teste Company', {force:true})

        // Razão Social
        cy.get('[name="corporate_name"]')
            .type('Testing LTDA', {force:true})

        // Inscrição Stadual
        cy.get('[name="state_registration"]')
            .type('SSP', {force:true})

        // Ramo de atividades
        cy.get('[name="line_of_business"]')
            .type('Tecnology', {force:true})

    }); 
    
    
    afterEach(() => {
        // Commando para sair da conta no final do cenário
        cy.logout();
    });

});