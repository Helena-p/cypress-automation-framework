/// <reference types="Cypress" />
describe('Test Contact Us form via WebdriverUni', () => {
	beforeEach(() => {
		cy.visit('http://www.webdriveruniversity.com/');
	});
	// successfull scenario
	it('Should be able to submit form successfully', () => {
		cy.get('a').contains('CONTACT US').click();
	});

	// unsuccessfull scenario
	it('Should be NOT be able to submit form successfully since all fields are required', () => {
		// test body
	});
});
