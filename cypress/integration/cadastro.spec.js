
import cadastro from '../support/pages/CadastroPage'
import autenticacao from '../support/pages/components/Autenticacao.Page'
import cadastroFactories from '../factories/CadastroFactories'

describe ('cadastro', ()=>{
    it('cadastrando usuário', ()=>{

        var usuario = cadastroFactories.cadastro()

        cadastro.go()
        cadastro.fillform(usuario)
        autenticacao.submit()
        autenticacao.shouldBeText()

    })
    it('email já cadastrado', function (){

        var usuario = cadastroFactories.cadastro()
        usuario.email = 'nilayconte@uol.com'

        cadastro.go()
        cadastro.fillform(usuario)
        autenticacao.submit()
        autenticacao.souldBeMessageIsDanger('Oops! Email já cadastrado.')

    })

    it('email não informado', ()=>{
        var usuario = cadastroFactories.cadastro()
        usuario.email = '  '

        cadastro.go()
        cadastro.fillform(usuario)
        autenticacao.submit()
        autenticacao.souldBeMessageIsWarning('Oops! Informe seu email.')
    })

    it('senhas não são iguais', ()=>{
        var usuario = cadastroFactories.cadastro()
        usuario.password ='123456'
        usuario.confirm_password = '12345'

        cadastro.go()
        cadastro.fillform(usuario)
        autenticacao.submit()
        autenticacao.souldBeMessageIsWarning('Oops! Senhas não são iguais.')
    })

    it('senha não informada', ()=>{
        var top = cadastroFactories.cadastro()
        top.password = ' '
        top.confirm_password = ' '

        cadastro.go()
        cadastro.fillform(top)
        autenticacao.submit()
        autenticacao.souldBeMessageIsWarning('Oops! Informe sua senha.')
    })

    it('email e senha não informados', ()=>{

        cadastro.go()
        autenticacao.submit()
        autenticacao.souldBeMessageIsWarning('Oops! Informe seu email e sua senha.')
    })
})