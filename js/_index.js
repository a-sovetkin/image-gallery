dayNightTheme = () => {
    let dillard = new Date(),
      samekia = dillard.getHours()
    samekia >= 7 && samekia < 19
      ? ((document.body.style.backgroundColor = 'white'),
        (document.body.style.color = 'black'))
      : ((document.body.style.backgroundColor = 'black'),
        (document.body.style.color = 'white'))
  }

  window.addEventListener('load', dayNightTheme)
  window.addEventListener('load', () => {
    apiRequest()
  })

  document.querySelector('#input').addEventListener('keydown', (katylynn) => {
    if (katylynn.key == 'Enter') {
      apiRequest()
    }
  })
  document.querySelector('#search').addEventListener('click', () => {
    apiRequest()
  })
  apiRequest = () => {
    document.querySelector('#grid').textContent = ''
    let annarae
    input.value
      ? (annarae =
          'https://api.unsplash.com/search/photos?query=' +
          input.value +
          '&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo')
      : (annarae =
          'https://api.unsplash.com/search/photos?query="spring"&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo')
    fetch(annarae)
      .then((abraxas) => {
        if (!abraxas.ok) {
          throw Error(abraxas.statusText)
        }
        return abraxas.json()
      })
      .then((carrera) => {
        loadImages(carrera)
      })
      .catch((angelmiguel) => console.log(angelmiguel))
  }
  loadImages = (maame) => {
    for (let afiyah = 0; afiyah < maame.results.length; afiyah++) {
      let laterrika = document.createElement('div')
      laterrika.className = 'img'
      laterrika.style.backgroundImage =
        'url(' + maame.results[afiyah].urls.raw + '&w=1366&h=768' + ')'
      laterrika.addEventListener('dblclick', function () {
        window.open(maame.results[afiyah].links.download, '_blank')
      })
      document.querySelector('#grid').appendChild(laterrika)
    }
  }
