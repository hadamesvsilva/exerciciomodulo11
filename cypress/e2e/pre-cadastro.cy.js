/// <reference types="cypress" />

var faker = require('faker');
const Faker = require('faker/lib');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let nomefaker = faker.name.firstName()
        let sobrenomefaker = faker.name.lastName()
        let emailfaker = faker.internet.email(nomefaker)
        

        cy.get('#reg_email').type(emailfaker)
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomefaker)
        cy.get('#account_last_name').type(sobrenomefaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
    
});