
import cadastro from '../support/pages/CadastroPage'
import commun from '../support/pages/components/CommunPage'
import home from '../support/pages/homePage'
import cadastroFactories from '../factories/CadastroFactories'


describe ('cadastro', ()=>{
    it('cadastrando usuário', ()=>{

        var usuario = cadastroFactories.cadastro()

        cadastro.go()
        cadastro.fillform(usuario)
        commun.submit()
        home.shouldBeText()

    })
    it('email já cadastrado', function (){

        var usuario = cadastroFactories.cadastro()
        usuario.email = 'nilayconte@uol.com'

        cadastro.go()
        cadastro.fillform(usuario)
        commun.submit()
        commun.shouldBeMessageIsDanger('Oops! Email já cadastrado.')

    })

    it('email não informado', ()=>{
        var usuario = cadastroFactories.cadastro()
        usuario.email = '  '

        cadastro.go()
        cadastro.fillform(usuario)
        commun.submit()
        commun.shouldBeMessageIsWarning('Oops! Informe seu email.')
    })

    it('senhas não são iguais', ()=>{
        var usuario = cadastroFactories.cadastro()
        usuario.password ='123456'
        usuario.confirm_password = '12345'

        cadastro.go()
        cadastro.fillform(usuario)
        commun.submit()
        commun.shouldBeMessageIsWarning('Oops! Senhas não são iguais.')
    })

    it('senha não informada', ()=>{
        var top = cadastroFactories.cadastro()
        top.password = ' '
        top.confirm_password = ' '

        cadastro.go()
        cadastro.fillform(top)
        commun.submit()
        commun.shouldBeMessageIsWarning('Oops! Informe sua senha.')
    })

    it('email e senha não informados', ()=>{

        cadastro.go()
        commun.submit()
        commun.shouldBeMessageIsWarning('Oops! Informe seu email e sua senha.')
    })
})