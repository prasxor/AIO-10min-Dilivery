const categoryItems = [
  {
    title: 'Fruits',
    icon: 'https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/64/external-fruits-restaurant-photo3ideastudio-flat-photo3ideastudio.png',
    path: '/fruits'
  },
  {
    title: 'Grocery',
    icon: 'https://img.icons8.com/external-wanicon-flat-wanicon/64/external-vegetables-farming-and-agriculture-wanicon-flat-wanicon.png',
    path: '/vegetables'
  },
  {
    title: 'Gadgets',
    icon: 'https://img.icons8.com/3d-fluency/94/multiple-devices.png',
    path: '/electronics'
  },
  {
    title: 'Books',
    icon: 'https://img.icons8.com/fluency/48/books.png',
    path: '/books'
  },
  {
    title: 'Fashion',
    icon: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-fashion-lifestyles-flaticons-lineal-color-flat-icons-3.png',
    path: '/fashion'
  },
  {
    title: 'Kitchens',
    icon: 'https://img.icons8.com/color/48/kitchen-room.png',
    path: '/kitchen'
  },
  {
    title: 'Heath',
    icon: 'https://img.icons8.com/emoji/48/woman-in-lotus-position.png',
    path: '/wellness'
  },
  {
    title: 'Toys',
    icon: 'https://img.icons8.com/external-wanicon-flat-wanicon/64/external-toys-kindergarten-wanicon-flat-wanicon.png',
    path: '/toys'
  },
  {
    title: 'Sports',
    icon: 'https://img.icons8.com/office/40/basketball-2.png',
    path: '/sports'
  },
  {
    title: 'Pet Supplies',
    icon: 'https://img.icons8.com/office/40/dog-bowl.png',
    path: '/pets'
  },
  {
    title: 'Travel',
    icon: 'https://img.icons8.com/office/40/passenger-with-baggage.png',
    path: '/travel'
  }
];

const secondNavbar = document.getElementById('SecondNavbar');

secondNavbar.innerHTML = `
  <ul class="SecondNavbarUl">
    ${categoryItems.map(item => `
      <li class="SecondNavbarLi">
        <a href="${item.path}" class="nav-link">
          <img src="${item.icon}" alt="${item.title}" />
          <span>${item.title}</span>
        </a>
      </li>
    `).join('')}
  </ul>
`;
