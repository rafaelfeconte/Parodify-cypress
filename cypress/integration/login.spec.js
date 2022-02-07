import commun from '../support/pages/components/CommunPage'
import home from '../support/pages/homePage'
import login from '../support/pages/LoginPage'
import loginFactories from '../factories/LoginFactories'

describe('login', ()=>{
    it("login de usuário", ()=> {

      var user = loginFactories.login()

      login.go()
      login.signup(user)
      login.rememberData()
      commun.submit()
      home.shouldBeText()
    })
    it("email e senha incorretos", ()=>{

      var user = loginFactories.login()
      user.email = "rafaelcontee@bol.com"
      user.password = "123"

      login.go()
      login.signup(user)
      commun.submit()
      commun.shouldBeMessage('Oops! Email e/ou senha incorretos.')

    })
})