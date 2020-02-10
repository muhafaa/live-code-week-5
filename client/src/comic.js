class Comic {
  static getAll() {
    $('#comic-list').empty()
    $.ajax({
      type: 'GET',
      url: `${baseUrl}/comics`,
      headers: {
        access_token: localStorage.token
      },
      success: function(comics) {
        console.log(comics)
        comics.forEach((comic) => {
          const content = `
            <div class="col-4 mb-4">
                <div class="card text-center">
                <img
                    src="${comic.imageUrl}"
                    class="card-img-top"
                />
                <div class="card-body">
                    <h5 class="card-title">${comic.title}</h5>
                    <p class="card-text">Author: ${comic.author}</p>
                    <button type="button" class="btn btn-primary" onclick="Navigation.toUpdate(${comic.id})">Edit</button>
                </div>
                </div>
            </div>
            `
          $('#comic-list').append(content)
        })
      },
      error: function(err) {
        console.log(err.responseJSON)
      }
    })
  }

  static getOne(comicId) {
    const $title = $('input[name="title-update"]')
    const $author = $('input[name="author-update"]')
    const $url = $('input[name="imageUrl-update"]')
    $.ajax({
      type: 'GET',
      url: `${baseUrl}/comics/${comicId}`,
      headers: {
        access_token: localStorage.token
      },
      success: function(comic) {
        $title.val(comic.title)
        $author.val(comic.author)
        $url.val(comic.imageUrl)
        $('#btn-update').data('id', comic.id)
        $('#update-comic').show(comic.id)
      },
      error: function(err) {
        console.log(err.responseJSON)
      }
    })
  }

  static update(event) {
    event.preventDefault()
    const comicId = $('#btn-update').data('id')
    const $title = $('input[name="title-update"]')
    const $author = $('input[name="author-update"]')
    const $url = $('input[name="imageUrl-update"]')
    $.ajax({
      type: 'PUT',
      url: `${baseUrl}/comics/${comicId}`,
      headers: {
        access_token: localStorage.token
      },
      data: {
        title: $title.val(),
        author: $author.val(),
        imageUrl: $url.val()
      },
      success: function(response) {
        console.log(response)
        $('#update-comic').hide('fast', function() {
          Comic.getAll()
        })
      },
      error: function(err) {
        console.log(err.responseJSON)
      }
    })
  }
}
