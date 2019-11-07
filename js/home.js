/**
 * helper 
 * @param {cssSelector} selector 
 */
const _$ = function (selector) {
  return document.querySelector(selector)
}

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

/**
 * 
 * @param {string} query 
 * @param {number} limit 
 */
const urlBuilder = function (query,limit) {
  let url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}&limit=${limit}`
  return url
}

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

 const preSearch = function () {
      const bodyContainer = _$('.main-content')
      
      bodyContainer.innerHTML = ''
      bodyContainer.innerHTML += `<nav class="navbar navbar-light " id="search-nav">
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search albums" aria-label="Search" id="search-album" onkeyup="search()">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onclick="search()" >Search</button>
      </form>
    </nav>
    <div class="container albums-content ">
            
    </div>
    `

 }

 const search = function () {
  const albumContainer = _$('.albums-content')
  albumContainer.innerHTML = ''
  let searchElement = _$('input[type="search"]').value
  if (searchElement) {
    let searchUrl = urlBuilder(searchElement ,6)
    createRequest(searchUrl,homeRender,initHeader)
  }
 
}





 window.addEventListener('DOMContentLoaded', () => {
   let eminemUrl = urlBuilder('eminem',6)
   let metallicaUrl = urlBuilder('metallica',6)
   let behemothUrl = urlBuilder('behemoth', 6)
  createRequest(eminemUrl,homeRender,initHeader)
  createRequest(metallicaUrl,homeRender,initHeader)
  createRequest(behemothUrl,homeRender,initHeader)
 })