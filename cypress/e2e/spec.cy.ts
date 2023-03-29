// @ts-ignore
describe('open the site', () => {
	it('open the site', () => {
		cy.visit('http://localhost:3000/')

		cy.get('.dts').contains(new RegExp(/\d/gm))
		cy.get('.vts').contains(new RegExp(/\d/gm))
	})
})
