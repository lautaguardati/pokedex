/// <reference types="Cypress" />

const URL = "http://192.168.0.245:8080/pokedex.html"

describe('Entra a la pokedex', () => {
    it('Intenta apretar el boton de ver lista más de una vez', () => {
        cy.visit(URL);
        cy.get("#boton-ver-lista").click();
        cy.get("#boton-ver-lista").should('be.disabled')
    })
    describe('Mirar los datos de un pokemon', () => {
        it('Entra a un pókemon y está todo correcto', () => {
            cy.visit(URL);
            cy.get("#boton-ver-lista").click();
            cy.get("#lista-de-pokemons div").should('have.length', '20');
            cy.get('#bulbasaur').click();
            cy.get('#pokemon-seleccionado').should('include.text', 'bulbasaur');
            cy.get('#nombre-pokemon').find("img").should('be.visible');
            cy.get('#pokemon-seleccionado').should('include.text', 'overgrow, chlorophyll.');
            cy.get('#pokemon-seleccionado').should('include.text', 'Altura: 7');
            cy.get('#pokemon-seleccionado').should('include.text', 'Peso: 69');
            cy.get('#pokemon-seleccionado').should('include.text', 'grass, poison.');
        })
    })
    describe('Selecciona un otro pokemon', () => {
        it('Selecciona a charmander', () => {
            cy.visit(URL);
            cy.get("#boton-ver-lista").click();
            cy.get('#bulbasaur').click();
            cy.get('#pokemon-seleccionado').should('include.text', 'bulbasaur');
            cy.get('#charmander').click();
            cy.get('#pokemon-seleccionado').should('include.text', 'charmander');
            cy.get('#pokemon-seleccionado').should('be.visible')
        })
    })
    describe('Prueba distintas paginas', () => {
        it('Cambia de pagina', () => { 
            cy.visit(URL);
            cy.get("#boton-ver-lista").click();
            cy.get('#bulbasaur').click();
            cy.get('#pokemon-seleccionado').should('include.text', 'bulbasaur');
            cy.get('#siguiente-pagina').should('be.visible');
            cy.get('#siguiente-pagina').click();
            cy.get('#spearow').click();
            cy.get('#pokemon-seleccionado').should('include.text', 'spearow');
            cy.get('#anterior-pagina').click();
            cy.get('#charmander').click();
            cy.get('#nombre-pokemon').find("img").should('be.visible');
        })
    })
})
