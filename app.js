const form = document.querySelector('form')
const submit = document.querySelector('.submit')
var firstLetter = ''
var userName = ''
const input = document.querySelector('input')
const results = document.querySelector('.results')
const display = document.querySelector('.display')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    firstLetter = input.value[0]
    results.innerHTML = ''
    userName = input.value
    getInput(firstLetter)
    let lowLetter = firstLetter.toLowerCase()
    getNames(lowLetter)
})

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function getInput(firstLetter) {
    return firstLetter
}

function getNames(lowLetter) {
    const url = 'https://api.datamuse.com/words?sp=' + lowLetter + '*'

    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data)
            
            for (i = 0; i < data.length; i++) {
                let prefix = data[i]['word']
                let p = document.createElement('p')
                p.textContent = capitalize(prefix) + ' ' + userName
                results.appendChild(p)
                display.style.display = "block"
            }
        })
        .catch(function(err) {
        console.log(err.message)
    })
}


