


function changeMoon() {

    var changeLua = document.querySelector('.image-lua')
    var buttonsMoons = document.querySelector('.buttons-moons')
    var h1Mars = document.querySelector('.titulo')
    var pMoons = document.querySelector('.p-lua')
    var spanMoons = document.querySelector('.p-moon')
    var travelMoons = document.querySelector('.p-days')

    changeLua.setAttribute('src', 'image-moon.png')
    h1Mars.innerHTML = 'MOON'
    pMoons.innerHTML = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
    spanMoons.innerHTML = '384,400 KM'
    travelMoons.innerHTML = '3 DAYS'
}


function changeMars() {
    var changeLua = document.querySelector('.image-lua')
    var buttonsMoons = document.querySelector('.buttons-moons')
    var h1Mars = document.querySelector('.titulo')
    var pMoons = document.querySelector('.p-lua')
    var spanMoons = document.querySelector('.p-moon')
    var travelMoons = document.querySelector('.p-days')

    changeLua.setAttribute('src', 'image-mars.png')
    h1Mars.innerHTML = 'MARS'
    pMoons.innerHTML = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'
    spanMoons.innerHTML = '225 MIL. KM'
    travelMoons.innerHTML = '9 MONTHS'
}

function changeEuropa() {
    var changeLua = document.querySelector('.image-lua')
    var buttonsMoons = document.querySelector('.buttons-moons')
    var h1Mars = document.querySelector('.titulo')
    var pMoons = document.querySelector('.p-lua')
    var spanMoons = document.querySelector('.p-moon')
    var travelMoons = document.querySelector('.p-days')

    changeLua.setAttribute('src', 'image-europa.png')

    h1Mars.innerHTML = 'EUROPA'
    pMoons.innerHTML = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'
    spanMoons.innerHTML = '628 MIL. KM'
    travelMoons.innerHTML = '3 YEARS'

}

function changeTitan() {

    var changeLua = document.querySelector('.image-lua')
    var buttonsMoons = document.querySelector('.buttons-moons')
    var h1Mars = document.querySelector('.titulo')
    var pMoons = document.querySelector('.p-lua')
    var spanMoons = document.querySelector('.p-moon')
    var travelMoons = document.querySelector('.p-days')

    changeLua.setAttribute('src', 'image-titan.png')

    h1Mars.innerHTML = 'TITAN'
    pMoons.innerHTML = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
    spanMoons.innerHTML = '1.6 BIL. KM'
    travelMoons.innerHTML = '7 YEARS'

}







