const _$ = function (selector) {
  return document.querySelector(selector)
}

const _$$ = function (selector) {
  return document.querySelectorAll(selector)
}

const _$C = function (element) {
  return document.createElement(element)
}

const initHeader = {
  headers: {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "3add489984mshcdfd14eb79a1736p132c4cjsn95b0774294c4"
  }
}

const urlBuilder = function (query,limit) {
  let url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}&limit=${limit}`
  return url
}

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
     
  `
}

const  createRequest = function (url, succeed, initHeader) {
  fetch(url,initHeader)
   .then((reponse) => reponse.json())
   .then((data) => succeed(data))
}

 const homeRender = function(dataParsed) {
   console.log(dataParsed)
    const albumContainer = _$('.albums-content')
    dataParsed.data.forEach(element => {
      `<h2 class="ml-5 text-white pt-4">#THROWBACKTHURSDAY</h2>
      <div class="row ml-5" id="throw-back-thursday">

      </div>
      </div>
      `
      albumContainer.innerHTML += template(element,'eminem')
    })


 }

 window.addEventListener('DOMContentLoaded', () => {
   let eminemUrl = urlBuilder('eminem',6)
  createRequest(eminemUrl,homeRender,initHeader)
 })