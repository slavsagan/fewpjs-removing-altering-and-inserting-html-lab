document.querySelector('main').remove()

let newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = 'Slav is the champion'
