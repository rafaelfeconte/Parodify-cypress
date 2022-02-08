
var faker = require('faker')

export default {

    cadastro: function() {
      var dados = {
          email: faker.internet.email(),
          password: '123456',
          confirm_password: '123456'
      }
      return dados
    }
}