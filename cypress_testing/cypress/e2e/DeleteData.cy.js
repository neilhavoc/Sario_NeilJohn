const url = "http://localhost:3000/Home";

describe('Check Local API', () => {
    //Visit The URL and Check Table if it has Data
    it('Test Data Insert', () => {
        cy.visit(url);
        //Assert Url
        cy.url().should('eq', url);

        cy.get('#MyTable').should('length', 1);

        let fname = 'NeilJohn1';
        let lname = 'Sario2';


        cy.get('#MyTable > tr').last().find('td').first().find('span').first().should('have.text', fname);
        cy.get('#MyTable > tr').last().find('td').eq(1).find('span').first().should('have.text', lname);


        cy.get('#MyTable > tr').last().find('td').last().find('button').last().click();

        cy.get('#MyTable > tr').last().find('td').first().find('span').first().should('not.have.text', fname);
        cy.get('#MyTable > tr').last().find('td').eq(1).find('span').first().should('not.have.text', lname);
    });
});
