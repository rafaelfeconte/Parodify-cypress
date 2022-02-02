class AutenticacaoPage {
    submit() {
        cy.get('input[name="commit"]').click()
    }

    shouldBeText() {
        cy.get('.is-size-5:first-child').should('be.visible')
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

}

export default new AutenticacaoPage;