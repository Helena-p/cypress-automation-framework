/// <reference types="Cypress" />
describe('Test Contact Us form via WebdriverUni', () => {
	beforeEach(() => {
		cy.visit(
			'http://www.webdriveruniversity.com/Contact-Us/contactus.html'
		);
		cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
		cy.title().should('include', 'WebDriver | Contact Us');
		cy.url().should('include', 'contactus');
	});
	// successfull scenario
	it('Should be able to submit form successfully', () => {
		// cy.get('#contact-us').click({ force: true });
		cy.get('[name="first_name"]').type('Joe');
		cy.get('[name="last_name"]').type('Champ');
		cy.get('[name="email"]').type('joe@champ.com');
		cy.get('textarea.feedback-input').type("hi, I'm witing a comment");
		cy.get('[type="submit"]').click();
		cy.get('#contact_reply > h1').should(
			'have.text',
			'Thank You for your Message!'
		);
	});

	// unsuccessfull scenario
	it('Should be NOT be able to submit form successfully since all fields are required', () => {
		cy.get('[name="first_name"]').type('Joe');
		cy.get('[name="last_name"]').type('Champ');
		cy.get('textarea.feedback-input').type("hi, I'm witing a comment");
		cy.get('[type="submit"]').click();
		cy.get('body').contains('Error: all fields are required');
		// logging to cypress console
		cy.log('message');
	});
});

// https://www.automationteststore.com/
