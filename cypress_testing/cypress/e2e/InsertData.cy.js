const url = "http://localhost:3000/Home";

describe('Check Local API', () => {
    //Visit The URL and Check Table if it has Data
    it('Test Data Insert', () => {
        cy.visit(url);
        //Assert Url
        cy.url().should('eq', url);

        cy.get('#MyTable').should('length', 1);

        cy.fixture('user.json').then((data) => {
            cy.get('#FName').type(data.name);
            cy.get('#FName').should('have.value', data.name);
            cy.get('#LName').type(data.lastname);
            cy.get('#FName').should('have.value', data.name);

            cy.get('#AddUser').click();

            cy.wait(2000);

            cy.get('#FName').should('be.empty');
            cy.get('#FName').should('be.empty');

            cy.get('#MyTable > tr').last().find('td').first().find('span').first().should('have.text', data.name);
        });


    });
});
