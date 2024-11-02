import * as main_page from "../locators/main_page.json";
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"
import * as loginpass_info from "../loginpass_info/default_data.json"

describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
        cy.visit('/');
        cy.get(main_page.email).type(loginpass_info.login);
        cy.get(main_page.password).type(loginpass_info.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Авторизация прошла успешно');
        cy.get(result_page.close).should('be.visible');
    })

    it('Логика восстановления пароля', function () {
        cy.visit('/');
        cy.get(main_page.fogot_pass_btn).click();
        cy.get(recovery_password_page.email).type(loginpass_info.login);
        cy.get(recovery_password_page.send_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');
        cy.get(result_page.close).should('be.visible');
    })

    it('Верный логин неверный пароль', function () {
        cy.visit('/');
        cy.get(main_page.email).type(loginpass_info.login);
        cy.get(main_page.password).type('zxczxc');
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Такого логина или пароля нет');
        cy.get(result_page.close).should('be.visible');
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('/');
        cy.get(main_page.email).type("zxc@zxc.ru");
        cy.get(main_page.password).type(loginpass_info.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Такого логина или пароля нет');
        cy.get(result_page.close).should('be.visible');
    })

    it('Логин без "@" и верный пароль', function () {
        cy.visit('/');
        cy.get(main_page.email).type("zxczxc.ru");
        cy.get(main_page.password).type(loginpass_info.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Нужно исправить проблему валидации');
        cy.get(result_page.close).should('be.visible');
    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('/');
        cy.get(main_page.email).type("GerMan@Dolnikov.ru");
        cy.get(main_page.password).type(loginpass_info.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Авторизация прошла успешно');
        cy.get(result_page.close).should('be.visible');
    })


}) 
