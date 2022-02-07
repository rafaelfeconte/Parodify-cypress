class AlbumPage {

    shouldBeText(text) {
        cy.contains('.is-size-5', text).should('be.visible')
    }

    ShouldBeRock(messageText){
        cy.contains('.has-text-weight-bold', messageText).should('be.visible')
    }

    rockNRoll(){
        cy.get('a[href$="1"] img').click()
    }

}
export default new AlbumPage;