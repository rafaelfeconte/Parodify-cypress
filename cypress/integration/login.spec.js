import autenticacao from '../support/pages/components/Autenticacao.Page'
import login from '../support/pages/LoginPage'
import loginFactories from '../factories/LoginFactories'

describe('login', ()=>{
    it("login de usuário", ()=> {

      var user = loginFactories.login()

      login.go()
      login.signup(user)
      autenticacao.submit()
      autenticacao.shouldBeText()

    })
})