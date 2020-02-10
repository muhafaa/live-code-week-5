class Frontpage {
  static login(event) {
    event.preventDefault()
    const $email = $('input[name="email-login"]')
    const $pw = $('input[name="password-login"]')
    $.ajax({
      type: 'POST',
      url: `${baseUrl}/login`,
      data: {
        email: $email.val(),
        password: $pw.val()
      },
      success: function(response) {
        $email.val('')
        $pw.val('')
        localStorage.setItem('token', response.access_token)
        Comic.getAll()
        $('#logout').show()
        $('#alert').hide()
        $('#login').hide('fast', function() {
          $('#comics').show('fast')
        })
      },
      error: function(err) {
        $('#alert').text(err.responseJSON)
        $('#alert').show()
        setTimeout(() => {
          $('#alert').hide()
        }, 4000)
      }
    })
  }

  static register(event) {
    event.preventDefault()
    const $name = $('input[name="name-register"]')
    const $email = $('input[name="email-register"]')
    const $pw = $('input[name="password-register"]')
    $.ajax({
      type: 'POST',
      url: `${baseUrl}/register`,
      data: {
        name: $name.val(),
        email: $email.val(),
        password: $pw.val()
      },
      success: function(response) {
        $name.val('')
        $email.val('')
        $pw.val('')
        localStorage.setItem('token', response.access_token)
        Comic.getAll()
        $('#logout').show()
        $('#alert').hide()
        $('#register').hide('fast', function() {
          $('#comics').show('fast')
        })
      },
      error: function(err) {
        $('#alert').text(err.responseJSON)
        $('#alert').show()
        setTimeout(() => {
          $('#alert').hide()
        }, 4000)
      }
    })
  }

  static getRandomUser(event) {
    event.preventDefault()
    const $name = $('input[name="name-register"]')
    const $email = $('input[name="email-register"]')
    const $pw = $('input[name="password-register"]')
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data) {
        console.log(data.results[0])
        const user = data.results[0]
        $name.val(user.name.first + ' ' + user.name.last)
        $email.val(user.email)
        $pw.val(user.login.password)
      },
      error: function(err) {
        console.log(err.responseJSON)
      }
    })
  }
}
