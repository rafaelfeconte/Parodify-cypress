import commun from '../support/pages/components/CommunPage'
import favorite from '../support/pages/FavotiteSong'
import home from '../support/pages/homePage'
import login from '../support/pages/LoginPage'
import album from '../support/pages/Albums'
import rock from '../support/pages/PlayRockPage'
import loginFactories from '../factories/LoginFactories'

describe('adicionando album favorito', ()=>{
    it('login e favoritando album de rock', ()=>{
        var user = loginFactories.login()

        user.email = 'nilay.conte@uol.com'
        user.senha = '123456'

        login.go()
        login.signup(user)
        login.rememberData()
        commun.submit()
        home.shouldBeText()
        commun.buttonSearch()
        album.shouldBeText('Buscar')
        album.rockNRoll()
        rock.shouldBeRock('Rock')
        rock.charlieBrowBug()
        commun.shouldBeNameMusic('Sprints de Luta Sprints de Gloria')
        rock.favorite()
        commun.buttonFavorite()
        favorite.shouldBeTextFavoritos('Favoritos')
        favorite.music()
        commun.shouldBeNameMusic('Sprints de Luta Sprints de Gloria')
    })
})