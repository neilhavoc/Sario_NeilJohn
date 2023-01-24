const url = "http://localhost:3000/";

// eslint-disable-next-line no-undef
describe('Check Local API', () => {
    // Visit The URL and Check Table if it has Data
    it('Test Login', () => {
        cy.visit(url);
        // Assert Url
        cy.url().should('eq', url);

        cy.get('#Email').type('sario@mail.com');
        cy.get('#Email').should('have.value', 'sario@mail.com');
        cy.get('#Password').type('Password143');
        cy.get('#Password').should('have.value', 'Password143');

        cy.get("#Login").click();
        cy.url().should('eq', url + 'Home');
    });
});