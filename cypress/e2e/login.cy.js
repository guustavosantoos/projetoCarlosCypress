
describe('login', () => {

    beforeEach(() => {
        // URL que vai ser testado 
        cy.visit('/')
        cy.url().should('include', 'https://inovafactory.com.br/sistema/public/')

    })


    it.only('Efetuando o login válido', () => {

        cy.contains('Faça Login na sua Conta')
            .should('have.text', 'Faça Login na sua Conta');

        // Entrando na aplicação
        // EMAIL / SENHA VÁLIDOS
        cy.get('[name="email"]')
            .type('carlos@teste.com');
        cy.get('[name="password"]')
            .type('123', { log: false });

        // Click LOGIN
        cy.get('[type="submit"]')
            .click();

        // Verificar se logou corretamente se está na página do "DASBOARD".    
        cy.get('[class="text-dark"]')
            .should('be.visible');
    });

    it('Validando o login com email inválido', () => {
        // Verificando se está na tela de login.
        cy.contains('Faça Login na sua Conta')
            .should('have.text', 'Faça Login na sua Conta')

        // Tentando efetuar o login com o email inválido
        cy.get('[name="email"]')
            .type('gustavo@teste.com');

        cy.get('[name="password"]')
            .type('123');

        cy.get('[type="submit"]')
            .click();

        // Mensagem de erro que deve ser exibido
        cy.contains(' Usuário e ou senha não existe ')
            .should('have.text', ' Usuário e ou senha não existe ')
    });

    it('Validando o login com senha inválida', () => {
        // Verificando se está na tela de login.
        cy.contains('Faça Login na sua Conta')
            .should('have.text', 'Faça Login na sua Conta')

        // Preenchendo o login com a senha inválida
        cy.get('[name="email"]')
            .type('carlos@teste.com')

        cy.get('[name="password"]')
            .type('123456', { log: false })

        cy.get('[type="submit"]')
            .click();

        // Mensagem de erro que deve ser exibido
        cy.contains(' Usuário e ou senha não existe ')
            .should('have.text', ' Usuário e ou senha não existe ')
    });

    it('Validando o login enviando nenhum campo', () => {
        // Verificando se está na tela de login.
        cy.contains('Faça Login na sua Conta')
            .should('have.text', 'Faça Login na sua Conta')

        cy.get('[type="submit"]')
            .click()

        // Validando as mensagens de erro dos campos 'EMAIL' e 'SENHA'
        cy.contains(' O campo email é obrigatório ')
            .should('have.text', ' O campo email é obrigatório ')
        cy.contains(' O campo senha é obrigatório ')
            .should('have.text', ' O campo senha é obrigatório ')
            
    });

});