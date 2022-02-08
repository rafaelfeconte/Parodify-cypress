class CadastroPage {
    
    go(){
        cy.visit('/')
        cy.get('.is-white').should('have.text', 'Login')
        cy.get('.is-rounded').click()
    }

    fillform(cadastro){
        cy.get('input[placeholder*="email"]').type(cadastro.email)
        cy.get('#user_password').type(cadastro.password)
        cy.get('input[placeholder^="Confirme"]').type(cadastro.confirm_password) 
    }
}

export default new CadastroPage;