/* eslint-disable no-undef */
const terminalLog = require('../support/commands');

describe('My First Test', () => {
  before(() => {
    cy.visit('/');
  });

  it('Check a11y violations inlcuding search results', () => {
    cy.get('input[type=text]').type('porsche');
    cy.get('button').contains('Search').click();
    cy.injectAxe();
    cy.checkA11y(
      null,
      {
        runOnly: {
          values: ['wcag2a'],
        },
      },
      terminalLog,
    );
  });

  it('should contain the text Headline Search', () => {
    cy.get('.o-grid-row').find('h1')
      .should('be.visible')
      .and('contain', 'Headline Search');
  });
});
