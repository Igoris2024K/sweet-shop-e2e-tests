/// <reference types="cypress" />

describe('Sweet Shop - Krepšelio funkcionalumas', () => {
  before(() => {
    cy.log('Testai pradedami: Krepšelio funkcionalumas');
    cy.visit('https://sweetshop.netlify.app/sweets');
  });

  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.get('a[href="/basket"]').click();
    cy.get('body').then(($body) => {
      if ($body.find('a:contains("Empty Basket")').length > 0) {
        cy.contains('Empty Basket').click();
      }
    });
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.checkCartCounter(0);
  });

  afterEach(() => {
    cy.log('Testas baigtas');
  });

  after(() => {
    cy.log('Visi krepšelio testai baigti');
  });

  it('1. Patikrina, ar krepšelis tuščias pradžioje', () => {
    cy.checkCartCounter(0);
  });

  it('2. Patikrina, ar galima pridėti saldumyną į krepšelį', () => {
    cy.get('h4.card-title')
      .first()
      .then(($h4) => {
        const itemName = $h4.text().trim();
        cy.addItemToCart(itemName);
        cy.checkCartCounter(1);
      });
  });

  it('3. Patikrina, ar prekė matoma krepšelyje', () => {
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.get('h4.card-title')
      .first()
      .then(($h4) => {
        const itemName = $h4.text().trim();
        cy.addItemToCart(itemName);
        cy.checkCartCounter(1);
        cy.visit('https://sweetshop.netlify.app/basket');
        cy.checkCartItem(itemName);
      });
  });

  it('4. Patikrina, ar galima pašalinti prekę iš krepšelio', () => {
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.get('h4.card-title')
      .first()
      .then(($h4) => {
        const itemName = $h4.text().trim();
        cy.addItemToCart(itemName);
        cy.visit('https://sweetshop.netlify.app/basket');
        cy.removeItemFromCart(itemName);
      });
  });

  it('5. Patikrina, ar krepšelio skaitiklis atnaujinamas po pašalinimo', () => {
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.get('h4.card-title')
      .first()
      .then(($h4) => {
        const itemName = $h4.text().trim();
        cy.addItemToCart(itemName);
        cy.checkCartCounter(1);
        cy.visit('https://sweetshop.netlify.app/basket');
        cy.removeItemFromCart(itemName);
        cy.checkCartCounter(0);
      });
  });
}); 


