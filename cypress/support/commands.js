
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('addItemToCart', (itemName) => {
  cy.contains('h4', itemName).closest('div.card').find('a.btn.addItem').contains('Add to Basket').click();
});

Cypress.Commands.add('checkCartItem', (itemName) => {
  cy.get('ul.list-group.mb-3')
    .find('h6.my-0')
    .should('contain', itemName);
});

Cypress.Commands.add('logout', () => {
  cy.get('.user-menu').click();
  cy.contains('Logout').click();
});

Cypress.Commands.add('checkCartCounter', (expectedCount) => {
  cy.get('a[href="/basket"] span')
    .should('be.visible')
    .and('have.text', expectedCount.toString());
});

Cypress.Commands.add('removeItemFromCart', (itemName) => {
  cy.contains(itemName).parent().contains('Delete Item').click();
  cy.contains(itemName).should('not.exist');
});

Cypress.Commands.add('checkItemDetails', (itemName) => {
  cy.contains(itemName).click();
  cy.url().should('match', /https:\/\/sweetshop\.netlify\.app\/sweets\/\d+/);
  cy.get('h2').should('be.visible').and('not.be.empty');
  cy.get('p').should('be.visible').and('not.be.empty');
  cy.get('p').contains('£').should('be.visible').and('not.be.empty');
  cy.get('button').contains('Add to Basket').should('be.visible');
});

Cypress.Commands.add('checkPageLoad', (url, title) => {
  cy.visit(url);
  cy.request(url).its('status').should('eq', 200);
  cy.contains(title).should('be.visible');
});

Cypress.Commands.add('checkSweetsList', () => {
  cy.get('p')
    .filter(':contains("£")')
    .prev()
    .should('be.visible')
    .and('have.length.greaterThan', 0);

  cy.get('p')
    .filter(':contains("£")')
    .prev()
    .each(($p) => {
      const $item = $p.closest('div');
      const $card = $p.closest('div').parent();
      cy.wrap($item).find('p').first().should('be.visible').and('not.be.empty');
      cy.wrap($item).find('p').contains('£').should('be.visible').and('not.be.empty');
      cy.wrap($card).find('img').should('be.visible');
    });
}); 
