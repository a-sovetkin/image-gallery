 const search_block = document.querySelector('#input');
 const icon = document.querySelector('.search_icon_box');

 search_block.oninput = () => {
    if (search_block.value.length > 0) {
      icon.classList.toggle('_active', true);
    } else {
    icon.classList.toggle('_active', false);
    }
 }

  window.addEventListener('load', () => {
    apiRequest('load');
  })

  document.querySelector('#input').addEventListener('keydown', (el) => {
    if (el.key == 'Enter') {
      apiRequest();
    }
  })

  document.querySelector('#search').addEventListener('click', () => {
    apiRequest();
  })

  document.querySelector('.cross_icon').addEventListener('click', (el) => {
    search_block.value = '';
    icon.classList.toggle('_active', false);
  })

  function apiRequest (event){
    document.querySelector('#grid').textContent = '';
    let url = 'https://api.unsplash.com/search/photos?query=';
    const params = '&per_page=30&client_id=vhFhMeOZq9L5YT4NuXLR3VIWVsXbtJO76w6SByHHiMg';
    const def = 'random';
    url += input.value ? input.value + params : def + params;

    if (input.value != '') {
      const icon = document.querySelector('.search_icon_box');
      icon.classList.toggle('_active',  true);
    }

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        loadImages(data);
      })
      .catch((err) => console.log(err))
  }

  loadImages = (img) => {
    for (let i = 0; i < img.results.length; i++) {
      let elem = document.createElement('div')
      elem.className = 'img'
      elem.style.backgroundImage =
        'url(' + img.results[i].urls.raw + '&w=1366&h=768' + ')'
      elem.addEventListener('click', function () {
        window.open(img.results[i].links.download, '_blank')
      })
      document.querySelector('#grid').appendChild(elem)
    }
  }
