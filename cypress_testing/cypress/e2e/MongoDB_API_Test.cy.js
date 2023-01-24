const url = 'http://localhost:3000/Home';
let rowid;
describe('Check Local API', () => {
    //Visit The URL and Check Table if it has Data
    it('Visit the URL', () => {
        cy.visit(url);
        cy.url().should('eq', url);
        cy.get('#MyTable').should('length', 1);
    });

    //Check if Delete Button Works
    it('Check Delete Row Button', () => {
      cy.visit(url);
      cy.url().should('eq', url);

      //Click Delete Button
      
  });
});