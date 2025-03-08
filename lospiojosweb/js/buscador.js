const searchInput = document.getElementById('search-input');
const lyricItems = document.querySelectorAll('.lyric-item');

searchInput.addEventListener('keyup', function() {
  const filter = this.value.toLowerCase();

  lyricItems.forEach(item => {
    // Obtener el título almacenado en data-title
    const title = item.getAttribute('data-title').toLowerCase();

    // Mostrar o esconder el item según el filtro
    if(title.indexOf(filter) > -1) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});