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

    it.only('Visualizar informações de um cliente', () => {

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

    it('Adicionando novo cliente na lista', () => {
    
    
    
    
    }); 
    
    
    afterEach(() => {
        // Commando para sair da conta no final do cenário
        cy.logout();
    });

});