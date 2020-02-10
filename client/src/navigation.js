class Navigation {
  static toRegister() {
    $('#login').hide('fast', function() {
      $('#register').show('fast')
    })
  }

  static toLogin() {
    $('#register').hide('fast', function() {
      $('#login').show('fast')
    })
  }

  static toUpdate(comicId) {
    Comic.getOne(comicId)
  }

  static toComics(event) {
    event.preventDefault()
    $('input[name="title-update"]').val('')
    $('input[name="author-update"]').val('')
    $('input[name="url-update"]').val('')
    $('#update-comic').hide()
  }

  static logout() {
    localStorage.removeItem('token')
    $('#update-comic').hide()
    $('#comics').hide('fast', function() {
      $('#logout').hide()
      $('#login').show('fast')
    })
  }
}
