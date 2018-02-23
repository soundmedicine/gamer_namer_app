const form = document.querySelector('form')
const submit = document.querySelector('.submit')
var firstLetter = ''
var quotedName = ''
var userName = ''
const input = document.querySelector('input')
const results = document.querySelector('.results')
const display = document.querySelector('.display')

form.addEventListener('submit', submission)


function submission(event) {
    results.innerHTML = ''
    event.preventDefault()
    const firstLetter = input.value[0]
    getNames(firstLetter.toLowerCase)
}

getNames(firstLetter)

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function getNames(letter) {
    const url = 'https://api.datamuse.com/words?sp=' + firstLetter + '*'

    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data)
            form.addEventListener('submit', (event) => {
                event.preventDefault()
                console.log(input.value)
                quotedName = "'" + input.value + "'"
                userName = input.value
                firstLetter = input.value[0]
            })
            for (i = 0; i < data.length; i++) {
                let prefix = data[i]['word']
                console.log(prefix[0].toUpperCase())
                let p = document.createElement('p')
                p.textContent = capitalize(prefix) + ' ' + userName
                results.appendChild(p)
                display.style.display = "block"

                // input.value = ''
            }
        })
        .catch(function(err) {
        console.log(err.message)
    })
}


