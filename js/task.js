let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');
let sections = document.querySelectorAll('sections');
let navlinks = document.querySelectorAll('header nav a')


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getaAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a [href*=' + id +']').classlist.add('active')
            })
        }
    })
}

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
