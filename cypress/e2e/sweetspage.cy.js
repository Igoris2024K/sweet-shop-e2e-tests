/// <reference types="cypress" />



describe('Sweet Shop - Saldumynų puslapis', () => {
  before(() => {
    cy.log('Testai pradedami: Saldumynų puslapis');
    cy.checkPageLoad('https://sweetshop.netlify.app/sweets', 'Browse sweets');
  });

  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.contains('Browse sweets').should('be.visible');
  });

  afterEach(() => {
    cy.log('Testas baigtas');
  });

  after(() => {
    cy.log('Visi saldumynų puslapio testai baigti');
  });

  it('1. Patikrina, ar puslapis įsikelia sėkmingai', () => {
    cy.checkPageLoad('https://sweetshop.netlify.app/sweets', 'Browse sweets');
  });

  it('2. Patikrina, ar saldumynų sąrašas matomas', () => {
    cy.checkSweetsList();
  });

  it('3. Patikrina, ar galima pridėti saldumyną į krepšelį', () => {
    cy.get('h4.card-title')
      .first()
      .then(($h4) => {
        const itemName = $h4.text().trim();
        cy.addItemToCart(itemName);
        cy.checkCartCounter(1);
      });
  });

  it('4. Patikrina, ar kiekviena saldumyno kortelė turi paveikslėlį, pavadinimą ir kainą', () => {
    cy.get('div.card').each(($card) => {
      cy.wrap($card).find('img').should('be.visible');
      cy.wrap($card).find('h4.card-title').should('be.visible').and('not.be.empty');
      cy.wrap($card).find('p').contains('£').should('be.visible').and('not.be.empty');
    });
  });

  it('5. Patikrina, ar grįžimo mygtukas veikia', () => {
    cy.get('a[href="/"]').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/');
  });
}); 