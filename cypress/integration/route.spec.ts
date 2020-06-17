describe('Home page to About page', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should navigate to About page and show bio', () => {
		cy.get('li').contains('Chuck');
		cy.get('[cy-data="about"]').click();
		cy.get('h2').contains('Bio');
	});
});
