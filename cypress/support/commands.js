import 'cypress-xpath';



Cypress.Commands.add('realizarLogin', login => {

    // Validando se está na página de login
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

Cypress.Commands.add('acessarClientes', clientes => {
    // Abrindo a seção de opções
    cy.get('[class="bi bi-list toggle-sidebar-btn"]')
        .click();

    // Selecionado a opção de 'Clientes'
    cy.get('[class="bi bi-list toggle-sidebar-btn"]')
        .click();

    // Selecionado a opção de 'Clientes'
    cy.get('[class="nav-link collapsed"]')
        .first()
        .click()

    // Validando se está na tela correta 'Clientes'
    cy.get('[class="text-dark"]')
        .should('have.text', 'Clientes')

    cy.get('[class="bi bi-list toggle-sidebar-btn"]')
        .click();
})

Cypress.Commands.add('logout', logoutAccount => {

    // Acessar a opção de account
    cy.get('[class="nav-link nav-profile d-flex align-items-center pe-0"]')
        .click();


    // Realizar o logout da conta 
    // Toda vez que realizar os cenários ele sai da conta.    
    cy.get('[class="dropdown-item d-flex align-items-center"]')
        .last()
        .click();

})

