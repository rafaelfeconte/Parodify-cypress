class HomePage{

    shouldBeText() {
        cy.get('.is-size-5:first-child').should('be.visible')
    }

    shouldBeFavoriteMusic(favorite){
        cy.contains('.has-text-weight-semibold', favorite).should('be.visible')
    }
}

export default new HomePage;