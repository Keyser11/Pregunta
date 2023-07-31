const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {

    alert('Haz dieta 🙃👻')
    alert('Na mentira 😄😅')
    alert('Yo tambien quiero helado 😮‍💨🍦')
    alert('Pero...☝️')
    alert('No hay plata 😭😓')
    alert('Asi que....🤓')
    alert('Haz dieta 🤧🤷‍♂️')
    

});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {

    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    
    noBtn.style.position = 'absolute'
    noBtn.style.setProperty('top', randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`)
})