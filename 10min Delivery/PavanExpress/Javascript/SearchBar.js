// Search bar logic baby

function toggleSearchBar() {
    const searchBar = document.getElementById('searchBar');
    searchBar.style.display = (searchBar.style.display === 'none' || searchBar.style.display === '') 
      ? 'flex' 
      : 'none';
  }
