import * as main_page_pokemon from "../locators/main_page_pokemon.json"
import * as main_page_pokemon_oplata from "../locators/main_page_pokemon_oplata.json"
describe('pokemonebattle', function () {

    it('Покупка нового аватара для своего тренера', function () {
        cy.visit('https://pokemonbattle.ru/login');
        cy.get(main_page_pokemon.email).type("USER_LOGIN");
        cy.get(main_page_pokemon.password).type("USER_PASSWORD");
        cy.get(main_page_pokemon.login_button).click();
        cy.get(".header__container > .header__id").click();
        cy.get('[href="/shop"]').click();
        cy.get('.available > button').first().click();
        cy.get(main_page_pokemon_oplata.karta).type("4620869113632996");
        cy.get(main_page_pokemon_oplata.srok).type("1225");
        cy.get(main_page_pokemon_oplata.kod).type("125");
        cy.get(main_page_pokemon_oplata.name).type("zxc");
        cy.get(main_page_pokemon_oplata.oplata).click();
        cy.get('#cardnumber').type("56456");
        cy.get('.payment__submit-button').click();

    })



}) 