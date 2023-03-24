const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
const logoTop = document.getElementById("logo-top")

window.addEventListener("resize", function(){
    console.log(window.screen.width)
    if(window.screen.width > 599){
        logoTop.innerHTML = `
        <img src="img/devJared.png" alt="A logo that says dev id='Jared'">
        `
    }else{
        logoTop.innerHTML = ``
    }
})

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

