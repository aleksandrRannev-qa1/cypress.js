describe('Тестирование staya', function () {
    it('search something', function () {
        cy.visit('https://www.citilink.ru/');
        cy.get('.AuthPopup__button > .Link > .HeaderMenu__button > .IconAndTextWithCount__icon_mainHeader > .Icon').click();
        cy.get('.SignIn__login > .InputBox > .InputBox__container > .InputBox__input').type('Rannev.Aleks@mail.ru');
        cy.get('.SignIn__password > .InputBox > .InputBox__container > .InputBox__input').type('Llohpidr1337_');
        cy.get('.SignIn__button').click();
        cy.get('.HeaderMenu__buttons_basket > .Link > .HeaderMenu__button').contains('Корзина');
     })
 })
 