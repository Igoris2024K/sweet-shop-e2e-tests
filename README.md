# Sweet Shop E2E Testai

Šis projektas skirtas „Sweet Shop“ aplikacijos End-to-End (E2E) testavimui naudojant Cypress įrankį.

## Projekto struktūra
- `cypress/e2e/` - Testų failai:
  - `homepage.cy.js` - Pagrindinio puslapio testai.
  - `cart.cy.js` - Krepšelio funkcionalumo testai.
  - `sweetspage.cy.js` - Saldumynų puslapio testai.
- `cypress/support/commands.js` - Pasikartojančios komandos.

## Reikalavimai
- Node.js (rekomenduojama versija 16 ar naujesnė)
- Cypress (įdiegiama per `npm install cypress`)

## Diegimo instrukcijos
1. Klonuokite repozitoriumą:
   ```bash
   git clone https://github.com/Igoris2024K/sweet-shop-e2e-tests.git

