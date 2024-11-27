// CHANGE NAVBAR COLOR ON SCROLL
const imgOffset = $('#home').offset().top;
$(window).scroll(function () {
    let wScroll = $(window).scrollTop();
    if (wScroll > imgOffset) {
        $('.navbar').css('cssText', 'background-color: rgba(0,0,0,0.3) !important;');
    } else {
        $('.navbar').css('cssText', 'background-color: dark !important;');
    }
});


// NAVBAR LINKS
const NavItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Contact', link: '#contact' },
]

const navWrapper = document.querySelector('#navContainer');
const NavList = NavItems.map(item =>
    `<li class="nav-item">
        <a class="nav-link ${item.name == 'Home' && 'active'} " href="${item.link}">${item.name}</a>
    </li>`).join(' ')
// navWrapper.innerHTML = NavList                Commented to not be added



// FOOTER LINKS
const Social = [
    { name: 'GitHub', link: 'https://github.com/Mostafa3ta', icon: 'fa-brands fa-square-github' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/mostafa-mahmoud-33a1542b0', icon: 'fa-brands fa-linkedin' },
    { name: 'Email', link: 'mailto:m2ostafa2000@gmail.com', icon: 'fa-solid fa-square-envelope' },
    { name: 'WhatsApp', link: 'https://wa.me/+201206856251', icon: 'fa-brands fa-square-whatsapp' },
]

const socialWrapper = document.querySelector('#socialContainer');
const socialItems = Social.map(item =>
    `<a href="${item.link}" target="_blank" rel='noopener noreferrer'>
        <i class="${item.icon} text-black mx-2 fs-1 rounded-5"></i>
    </a>`).join(' ')
// socialWrapper.innerHTML = socialItems                Commented to not be added

