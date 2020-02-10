var baseUrl = 'http://localhost:3000'
$(document).ready(function() {
  if (!localStorage.token) {
    $('#login').show()
  } else {
    $('#logout').show()
    $('#comics').show()
    Comic.getAll()
  }
})
