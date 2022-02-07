class PlayRock{
    // constructor(){
    //     this.rock = 'a[href$="1"] img'
    // }
    rockNRoll(){
        get.cy(this.rock).click()
    }
    shouldBeRock(messageText){
        cy.contains('.has-text-weight-bold', messageText).should('be.visible')
    }

    charlieBrowBug(){
        cy.get('a[href="/albums/1"] img' ).click()
    }

    shouldBeNameMusic(nameMusic){
        cy.contains('.column h2.is-size-5', nameMusic).should('be.visible')
    }

    favorite(){
        cy.get('a[href$= "favorite"]').click()
    }
    
}

export default new PlayRock;