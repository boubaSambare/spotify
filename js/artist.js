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

  const urlBuilder = function (query,limit) {
    let url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}&limit=${limit}`
    return url
  }
  

  const  createRequest = async function (url, succeed, initHeader) {
    try {
        let reponse = await fetch(url,initHeader)
        let artists = await reponse.json()
        succeed(artists)
    } catch (error) {
        console.log(error)
    }
    
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
            </div>
    `
  }

  const artistRender = function(dataParsed) {
    console.log(dataParsed)
    const artistCovert = _$('#artist-cover')
    artistCovert.style.backgroundImage = 'url(' + dataParsed.data[0].artist.picture_big +')'
    artistCovert.style.backgroundPosition ='cover'
    document.body.style.background ='#181818'
     const albumContainer = _$('.albums-content')
     let albumsContent = ''
     let titleRow  = `<h2 class="ml-5 text-white pt-4">${dataParsed.data[0].artist.name}</h2>
               <div class="row ml-5" id="throw-back-thursday">`
     dataParsed.data.forEach(element => {
         albumsContent += template(element)
     })
     albumContainer.innerHTML += titleRow + albumsContent  + '</div>'
  }

  window.onload = async () => {
    let eminemUrl = urlBuilder('rihanna',6)
    
    await createRequest(eminemUrl,artistRender,initHeader)
  
  }
