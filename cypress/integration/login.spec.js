import autenticacao from '../support/pages/components/Autenticacao.Page'
import login from '../support/pages/LoginPage'
import loginFactories from '../factories/LoginFactories'

describe('login', ()=>{
    it("login de usuário", ()=> {

      var user = loginFactories.login()

      login.go()
      login.signup(user)
      login.rememberData()
      autenticacao.submit()
      autenticacao.shouldBeText()
    })
    it.skip("email e senha incorretos", ()=>{

      var user = loginFactories.login()
      user.email = "rafaelcontee@bol.com"
      user.password = "123"

      login.go()
      login.signup(user)
      autenticacao.submit()
      autenticacao.shouldBeMessage('Oops! Email e/ou senha incorretos.')

    })
})