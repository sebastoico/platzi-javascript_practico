// Menu display
const menuEmail = document.querySelector(".navbar-email");
const menuIcon = document.querySelector(".menu");
const orderIcon = document.querySelector(".navbar-shopping-cart");

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shopping-cart-detail");
const productDetailContainer = document.querySelector("#product-detail");
const productDetailClose = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuIcon.addEventListener("click", toggleMobileMenu);
orderIcon.addEventListener("click", toggleOrderAside);
productDetailClose.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

function toggleOrderAside() {
  shoppingCartContainer.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

function openProductDetailAside() {
  productDetailContainer.classList.remove("inactive");
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
}
function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

// Cards display
const cardsContainer = document.querySelector(".cards-container");
const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "Screen",
  price: 1200,
  image: "https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

renderProducts(productList);

function renderProducts(productList) {
  for (product of productList) {
    const productCard = document.createElement("div");
    const productImage = document.createElement("img");
    const productInfo = document.createElement("div");
    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    const productName = document.createElement("p");
    const productInfoFigure = document.createElement("figure");
    const productInfoCart = document.createElement("img");
    
    productCard.classList.add("product-card");
    productImage.setAttribute("src", product.image);
    productInfo.classList.add("product-info");
    productPrice.innerText = "$ " + product.price.toFixed(2);
    productName.innerText = product.name;
    productInfoCart.setAttribute("src", "./assets/icons/bt_add_to_cart.svg");

    productImage.addEventListener("click", openProductDetailAside);
  
    productInfoFigure.append(productInfoCart);
    productInfoDiv.append(productPrice, productName);
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(productImage, productInfo);
  
    cardsContainer.append(productCard);
  }
}

// Product detail display