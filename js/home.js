var ALBUMS = [
    {
      title: 'Italian Karaoke',
      category: '#throwbackthursday',
      img: 'https://i.scdn.co/image/6d61103bd4043701d6cd230a02fa43d916c4f144'
    },
    
    {
      title: 'OOs italy',
      category: '#throwbackthursday',
      img: 'https://i.scdn.co/image/8c1643c6a03f950c193184e1e35de3969d311adc'
    },
    {
      title: 'Cooktails Hours',
      category: '#throwbackthursday',
      img: 'https://i.scdn.co/image/ab67706f000000025af1070c80cd50dbbb4cfa19'
    },
    {
      title: 'I Love my 90\'s Hip Hop',
      category: '#throwbackthursday',
      img: 'https://pl.scdn.co/images/pl/default/7f90694e6e46b9bd702b639c71945bfc207ef4b3'
    },
    {
      title: 'Top-50 Italy',
      category: 'clasific',
      img: 'https://charts-images.scdn.co/REGIONAL_GLOBAL_DEFAULT.jpg'
    },
    {
      title: 'Top-50 Global',
      category: 'clasific',
      img: 'https://charts-images.scdn.co/REGIONAL_GLOBAL_DEFAULT.jpg'
    },
    {
      title: 'Viral-50 Italy',
      category: 'clasific',
      img: 'https://charts-images.scdn.co/VIRAL_GLOBAL_DEFAULT.jpg'
    },
    {
      title: 'Viral-Global',
      category: 'clasific',
      img: 'https://charts-images.scdn.co/VIRAL_GLOBAL_DEFAULT.jpg'
    }
  ]
var throwBackThursdayRow = _$('#throw-back-thursday')
var classificationRow = _$('#classification')

  function _$(selector) {
      return document.querySelector(selector)
  }

  function _$$(selector) {
      return document.querySelectorAll(selector)
  }

  function _$C(element) {
      return document.createElement(element)
  }

  /**
   * 
   *   <div class="col-12 col-sm-6 col-lg-3 my-3  ">
                   <div class="cover-album">
                        <a href="#" class="text-white">
                            <i class="material-icons">
                                play_circle_outline
                            </i>
                        </a>
                   </div>
                   <h3 class="text-white text-center my-2">OOs Italy</h3>
                </div>
   */

   function createCover(album) {
     var colContainer = _$C('div')
     colContainer.className = 'col-12 col-sm-6 col-lg-3 my-3'
     var albumCover = _$C('div')
     albumCover.className = 'cover-album'
     albumCover.style.backgroundImage = 'url(' + album.img + ')'
     albumCover.backgroundPosition = 'center'
     var iconLink = _$C('a')
     iconLink.href = '#'
     iconLink.className = 'text-white'
     var materialIcon = _$C('i')
     materialIcon.className = 'material-icons'
     materialIcon.textContent = ' play_circle_outline'
     var titleCover = _$C('h3')
     titleCover.className = 'text-white text-center my-2'
     titleCover.textContent = album.title

     iconLink.append(materialIcon)
     albumCover.append(iconLink)
     colContainer.append(albumCover, titleCover)
     return colContainer

   }
function render() {
  ALBUMS.forEach(function (item) {
    var choiceRow = (item.category === '#throwbackthursday') ? throwBackThursdayRow : classificationRow
    choiceRow.append(createCover(item))
  })
}

  window.onload = function (){
    render()
    $('.toast').toast('show')

  }