
function changeRocket() {


    var changeH1 = document.querySelector('h1')
    var changeImage = document.querySelector('.rocket')
    var changeText = document.querySelector('.launch-p')

    changeImage.setAttribute('src', 'rocket.jpg')
    changeH1.innerHTML = 'LAUNCH VEHICLE'
    changeText.innerHTML = 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earths surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, its quite an awe-inspiring sight on the launch pad!'

}


function changePlat() {
    var changeH1 = document.querySelector('h1')
    var changeText = document.querySelector('.launch-p')
    var changeImage = document.querySelector('.rocket')

    changeImage.setAttribute('src', 'launch.png')
    changeH1.innerHTML = 'SPACEPORT'
    changeText.innerHTML - 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'

}

function changeCapsula() {
    var changeH1 = document.querySelector('h1')
    var changeText = document.querySelector('.launch-p')
    var changeImage = document.querySelector('.rocket')

    changeImage.setAttribute('src', 'capsula.jpg')
    changeH1.innerHTML = 'SPACE CAPSULE'
    changeText.innerHTML = 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earths atmosphere without wings. Our capsule is where youll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.'


}