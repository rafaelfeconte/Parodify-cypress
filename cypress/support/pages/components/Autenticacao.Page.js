class AutenticacaoPage {
    submit() {
        cy.get('input[name="commit"]').click()
    }

    shouldBeText() {
        cy.get('.is-size-5:first-child').should('be.visible')
    }

    souldBeMessageIsDanger(messageText){
        cy.get('.is-danger .message-body p').should('have.text', messageText)
    }
 
    souldBeMessageIsWarning(messageText){
        cy.get('.message-body p').should('have.text', messageText)
    }
}

export default new AutenticacaoPage;