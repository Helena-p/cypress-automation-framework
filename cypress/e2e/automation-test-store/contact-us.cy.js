// <reference types="cypress" />

describe('Test contact us form via Automation Test Store', () => {
	it('Should be able to submit a successfull submission via contact us form', () => {
		cy.visit('https://www.automationteststore.com/');
		cy.get("a[href$='contact'").click();
		cy.get('#ContactUsFrm_first_name').type('Joe');
		cy.get('#ContactUsFrm_email').type('joeblog123@gmail.com');
		cy.get('#ContactUsFrm_enquiry').type(
			'Do you supply additional information?'
		);
		cy.get('.lock-on-click').click();
		cy.get('.mb40 > :nth-child(3)').should(
			'have.text',
			'Your enquiry has been successfully sent to the store owner!'
		);
	});
});
