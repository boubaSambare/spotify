<<<<<<< HEAD
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
=======
/**
 * helper 
 * @param {cssSelector} selector 
 */
const _$ = function (selector) {
  return document.querySelector(selector)
}
>>>>>>> jsbranch

/**
 * 
 * @param {cssSelector} selector 
 */
const _$$ = function (selector) {
  return document.querySelectorAll(selector)
}

/**
 * 
 * @param {htmlElement} element 
 */
const _$C = function (element) {
  return document.createElement(element)
}

const initHeader = {
  headers: {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "3add489984mshcdfd14eb79a1736p132c4cjsn95b0774294c4"
  }
}

<<<<<<< HEAD
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
=======
/**
 * 
 * @param {string} query 
 * @param {number} limit 
 */
const urlBuilder = function (query,limit) {
  let url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}&limit=${limit}`
  return url
}
>>>>>>> jsbranch

/**
 * 
 * @param {Object} data 
 */
const template = function(data) {
  return `
          <div class="col-12 col-sm-6 col-lg-3 my-3  ">
          <div class="cover-album" style=" background-image:url('${data.album.cover}') ;">
              <a href="#" class="text-white">
                  <i class="material-icons">
                      play_circle_outline
                  </i>
              </a>
          </div>
          <h3 class="text-white text-center my-2">${data.title}</h3>
          </div>
  `
}
/**
 * ajax call abstrack function
 * @param {string} url 
 * @param {callback} succeed 
 * @param {htpp header} initHeader 
 */

const  createRequest = function (url, succeed, initHeader) {
  fetch(url,initHeader)
   .then((reponse) => reponse.json())
   .then((data) => succeed(data))
}

/**
 * 
 * @param {object} dataParsed 
 */
 const homeRender = function(dataParsed) {
   console.log(dataParsed)
    const albumContainer = _$('.albums-content')
    let albumsContent = ''
    let titleRow  = `<h2 class="ml-5 text-white pt-4">${dataParsed.data[0].artist.name}</h2>
              <div class="row ml-5" id="throw-back-thursday">`
    dataParsed.data.forEach(element => {
        albumsContent += template(element)
    })
    albumContainer.innerHTML += titleRow + albumsContent  + '</div>'
 }



 window.addEventListener('DOMContentLoaded', () => {
   let eminemUrl = urlBuilder('eminem',6)
   let metallicaUrl = urlBuilder('metallica',6)
   let behemothUrl = urlBuilder('behemoth', 6)
  createRequest(eminemUrl,homeRender,initHeader)
  createRequest(metallicaUrl,homeRender,initHeader)
  createRequest(behemothUrl,homeRender,initHeader)
 })