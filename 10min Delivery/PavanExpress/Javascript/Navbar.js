const navItems = ['Home', 'About', 'Services', 'Contact'];

const navbar = document.getElementById('NavbarList');


navbar.innerHTML = navItems.map(item => `<li class="navbarLi"><a href="#">${item}</a></li>`).join('');
