/// <reference types="cypress" />

describe('Sweet Shop - Pagrindinio puslapio funkcionalumas', () => {
  before(() => {
    cy.log('Testai pradedami: Pagrindinio puslapio funkcionalumas');
    cy.checkPageLoad('https://sweetshop.netlify.app/', 'Sweet Shop');
  });

  beforeEach(() => {
    cy.checkPageLoad('https://sweetshop.netlify.app/', 'Sweet Shop');
  });

  afterEach(() => {
    cy.log('Testas baigtas');
  });

  after(() => {
    cy.log('Visi pagrindinio puslapio testai baigti');
  });

  it('1. Patikrina, ar pagrindinis puslapis sėkmingai įsikrauna', () => {
    cy.checkPageLoad('https://sweetshop.netlify.app/', 'Sweet Shop');
  });

  it('2. Patikrina, ar navigacijos nuorodos matomos', () => {
    cy.get('nav.navbar').should('be.visible');
    cy.get('a.nav-link').should('have.length.at.least', 2);
  });

  it('3. Patikrina, ar saldumynų sąrašas turi bent vieną elementą', () => {
    cy.checkSweetsList();
  });

  it('4. Patikrina, ar kiekvienas saldumynas turi pavadinimą ir kainą', () => {
    cy.get('div.card').each(($card) => {
      cy.wrap($card).find('h4.card-title').should('be.visible').and('not.be.empty');
      cy.wrap($card).find('p').contains('£').should('be.visible').and('not.be.empty');
    });
  });

  it('5. Patikrina, ar krepšelio skaitiklis matomas ir yra 0', () => {
    cy.checkCartCounter(0);
  });
}); 