const navEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burguerMenu = document.querySelector(".menu")
const mobilMenu = document.querySelector(".mobile-menu")
const cartIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCart = document.querySelector("#shoppingCartContainer")
const productDetail = document.querySelector("#productDetail")
const cardsContainer = document.querySelector('.cards-container');
const closeDetail = document.querySelector('.product-detail-close');
const myOrderContent = document.querySelector('.products-container');
const precioTotal = document.querySelector("#precioTotal")
const closeShoppingCart = document.querySelector(".title-container")
const addToCartButton = document.querySelector(".addToCartFromDetail")
const productDetailImage = document.querySelector("#productDetailImage")
const productDetailPrice = document.querySelector("#productDetailPrice")
const productDetailName = document.querySelector("#productDetailName")
const cartContent = document.querySelector("#cartContent")

navEmail.addEventListener("click", toggleDesktopMenu)
burguerMenu.addEventListener("click", toggleMobileMenu)
cartIcon.addEventListener("click", toggleShoppingCart)
closeDetail.addEventListener("click", closeProductDetail)
closeShoppingCart.addEventListener("click", toggleShoppingCart)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    productDetail.classList.add("inactive")
    shoppingCart.classList.add("inactive")
    mobilMenu.classList.toggle("inactive")
}

function toggleShoppingCart(){
    mobilMenu.classList.add("inactive")
    productDetail.classList.add("inactive")
    shoppingCart.classList.toggle("inactive")
}
//(product.image,product.value,product.name)
function showProductDetail(source, price, name){
    productDetailImage.setAttribute('src', source)
    productDetailPrice.innerText = '$ ' + price
    productDetailName.innerText = name
    mobilMenu.classList.add("inactive")
    shoppingCart.classList.add("inactive")
    productDetail.classList.remove("inactive")
}

function closeProductDetail(){
    productDetail.classList.add("inactive")
}

/* <div class="shopping-cart">
    <figure>
        <img src="https://images.pexels.com/photos/1720957/pexels-photo-1720957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike">
    </figure>
    <p>Toy</p>
    <p>$30,00</p>
    <img src="./icons/icon_close.png" alt="close">
</div> */

function addToCart(image, name, price){
    const productInfo = document.createElement('div')
    productInfo.classList.add("shopping-cart")

    const productFigure = document.createElement('figure')
    const productImage = document.createElement('img')
    productImage.setAttribute('src', image)

    const productName = document.createElement('p')
    productName.innerText = name
    const productPrice = document.createElement('p')
    productPrice.innerText = '$ ' + price

    const productCloseImage = document.createElement('img')
    productCloseImage.setAttribute('src', './icons/icon_close.png');
    productCloseImage.classList.add("removeProduct")
    productCloseImage.addEventListener("click", removeProduct)

    function removeProduct() {
        myOrderContent.removeChild(productInfo)
        resta = parseFloat(price)*-1
        calculatePrice(resta)
        calculateCount(-1)
    }

    productFigure.appendChild(productImage)
    productInfo.append(productFigure,productName,productPrice,productCloseImage)
    myOrderContent.appendChild(productInfo)

    calculatePrice(price)
    calculateCount(1)
}

var totalPrice = 0
var itemsQuantity = 0

function calculatePrice(productPrice){
    totalPrice = totalPrice + parseFloat(productPrice)
    precioTotal.innerText = "$" + totalPrice
}

function calculateCount(cantidad){
    itemsQuantity = itemsQuantity + parseInt(cantidad)
    if (itemsQuantity==0){
        cartContent.innerText = "+" 
    }else{
        cartContent.innerText = itemsQuantity
    }
}

class Product{
    constructor(name, value, image){
        this.name = name
        this.value = value
        this.image = image
    }
}

const productList = [];
/*productList.push(new Product("", ,"")*/
productList.push(new Product("Plane", 20,"https://images.pexels.com/photos/1720957/pexels-photo-1720957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"))
productList.push(new Product("Animals", 30,"https://images.pexels.com/photos/3661223/pexels-photo-3661223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"))
productList.push(new Product("Pikachu", 30,"https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=1600"))
productList.push(new Product("Eskeleton", 30,"https://images.pexels.com/photos/463684/pexels-photo-463684.jpeg?auto=compress&cs=tinysrgb&w=1600"))
productList.push(new Product("Wall-e", 40,"https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg?auto=compress&cs=tinysrgb&w=1600"))

/* <div class="product-card">
    <img src="https://images.pexels.com/photos/1720957/pexels-photo-1720957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Toy</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */

function renderProducts(array){
    for (var product of array){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener("click", showProductDetail.bind(this, product.image,product.value,product.name))
       
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
      
        const productInfoDiv = document.createElement('div');
      
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.value;
        const productName = document.createElement('p');
        productName.innerText = product.name;
      
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
      
        const productInfoFigure = document.createElement('figure');
        productInfoFigure.classList.add('addToCart');
        productInfoFigure.addEventListener("click", addToCart.bind(this, product.image,product.name, product.value))

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
      
        productInfoFigure.appendChild(productImgCart);
      
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
      
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
      
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList)