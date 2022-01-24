
describe ('cadastro', ()=>{
    it('cadastrando usuário', ()=>{
        cy.visit('https://parodify.herokuapp.com/')
        cy.get('.is-white').should('have.text', 'Login')
        cy.get('.is-rounded').click()
        cy.get('input[placeholder*="email"]').type('nilayconte@uol.com')
        cy.get('#user_password').type('123456')
        cy.get('input[placeholder^="Confirme"]').type('123456')
        cy.get('input[name="commit"]').click()
        cy.get('.is-pulled-right').should('be.visible')

    })
})