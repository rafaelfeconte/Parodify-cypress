class CommunPage{
    submit() {
        cy.get('input[name="commit"]').click()
    }

    shouldBeMessageIsDanger(messageText){
        cy.get('.is-danger .message-body p').should('have.text', messageText)
    }
 
    shouldBeMessageIsWarning(messageText){
        cy.get('.message-body p').should('have.text', messageText)
    }

    shouldBeMessage(messageText){
        cy.contains('.is-danger .message-body', messageText).should('be.visible')
    }

    buttonSearch(){
        cy.get('a[href$="new"]').click()
    }

    buttonHome(){
        cy.get('a[href="/"]').click()
    }

    buttonFavorite(){
        cy.get('a[href*="favorites"]').click()
    }

    shouldBeNameMusic(nameMusic){
        cy.contains('.column h2.is-size-5', nameMusic).should('be.visible')
    }

}

export default new CommunPage;