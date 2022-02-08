class LoginPage{

    go(){
        cy.visit('/users/sign_in')
    }

    signup(login){
       cy.get('input[type= "email"]').type(login.email)
       cy.get('#user_password').type(login.password)
    }

    rememberData(){
        cy.get('input[type= "checkbox"]').click()
    }
}
export default new LoginPage;