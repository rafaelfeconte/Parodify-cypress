class FavoriteSong{

    shouldBeTextFavoritos(messageText){
        cy.contains('.has-text-weight-bold', messageText).should('be.visible')
    }

    music(){
        cy.get('.has-text-centered .shared li a[target= "#songs"]').click()
    }
}

export default new FavoriteSong;