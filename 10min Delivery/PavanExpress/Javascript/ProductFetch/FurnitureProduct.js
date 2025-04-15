const categoryToRender = "furniture";

fetch('../../Data/ProductList.json')
  .then(res => res.json())
  .then(data => {
    const categoryItems = data[categoryToRender];
    const container = document.getElementById('furnitureSection');

    const limitedItems = categoryItems.slice(0, 12);

    limitedItems.forEach(item => {
      container.innerHTML += `
      
        <div class="CardsContainer">
          <div class="CardsContainerTop">
            <img src="${item.image}" alt="${item.name}" />
          </div>
          <div class="CardsContainerBottom">
            <div class="CardsContainerBottomTop">
              <h3>${item.name}</h3>
              <p>${item.shipping}</p>
              <p>$${item.price}</p>
            </div>
            <div class="CardsContainerBottomBottom">
              <div class="CardsContainerBtn">
                <div class="CardsMainBtn empty">
                  <img src="./Public/Img/Shop/shoppingCart.svg" alt="" />
                  <p>Cart</p>
                </div>
              </div>
              <div class="CardsContainerBtn">
                <div class="CardsMainBtn filled">
                  <img src="./Public/Img/Shop/baggingIcon.svg" alt="" />
                  <p>Buy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  })
  .catch(err => console.error('Failed to load category data:', err));
