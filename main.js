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
const dark = document.querySelector(".darkBackground")

navEmail.addEventListener("click", toggleDesktopMenu)
burguerMenu.addEventListener("click", toggleMobileMenu)
cartIcon.addEventListener("click", toggleShoppingCart)
closeDetail.addEventListener("click", closeProductDetail)
closeShoppingCart.addEventListener("click", toggleShoppingCart)
addToCartButton.addEventListener("click", botonClick)
dark.addEventListener("click", closeAll)

function closeAll(){
    dark.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    productDetail.classList.add("inactive")
    shoppingCart.classList.add("inactive")
}

function botonClick(){
    addToCart(carrito[0].image, carrito[0].name, carrito[0].value)
}

function toggleDesktopMenu(){ 
    if(shoppingCart.classList.contains("inactive") && productDetail.classList.contains("inactive")){
        dark.classList.toggle("inactive") 
    }
    desktopMenu.classList.toggle("inactive")
    shoppingCart.classList.add("inactive")
    productDetail.classList.add("inactive")
}

function toggleMobileMenu(){
    productDetail.classList.add("inactive")
    shoppingCart.classList.add("inactive")
    mobilMenu.classList.toggle("inactive")
}

function toggleShoppingCart(){
    if(desktopMenu.classList.contains("inactive") && productDetail.classList.contains("inactive")){
        dark.classList.toggle("inactive") 
    }
    desktopMenu.classList.add("inactive")
    mobilMenu.classList.add("inactive")
    productDetail.classList.add("inactive")
    shoppingCart.classList.toggle("inactive")
}

var carrito = []
//(product.image,product.value,product.name)
function showProductDetail(source, price, name){
    dark.classList.remove("inactive")
    productDetailImage.setAttribute('src', source)
    productDetailPrice.innerText = '$ ' + price
    productDetailName.innerText = name
    mobilMenu.classList.add("inactive")
    shoppingCart.classList.add("inactive")
    productDetail.classList.remove("inactive")
    carrito = []
    carrito.push(new Product(name, price, source))
}

function closeProductDetail(){
    dark.classList.add("inactive")
    carrito = []
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
    precioTotal.innerText = "$ " + totalPrice
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
/*productList.push(new Product("", ,""))*/
productList.push(new Product("Plane", 20,"https://images.pexels.com/photos/1720957/pexels-photo-1720957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"))
productList.push(new Product("Animals", 30,"https://images.pexels.com/photos/3661223/pexels-photo-3661223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"))
productList.push(new Product("Pikachu", 30,"https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=1600"))
productList.push(new Product("Eskeleton", 30,"https://images.pexels.com/photos/463684/pexels-photo-463684.jpeg?auto=compress&cs=tinysrgb&w=1600"))
productList.push(new Product("Wall-e", 40,"https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg?auto=compress&cs=tinysrgb&w=1600"))
productList.push(new Product("Spinner", 10,"https://images.pexels.com/photos/1330638/pexels-photo-1330638.jpeg?auto=compress&cs=tinysrgb&w=1600"))
productList.push(new Product("Car", 30,"https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=1600"))
productList.push(new Product("Warrior", 40,"https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1600"))
productList.push(new Product("Jack", 40,"https://images.pexels.com/photos/619419/pexels-photo-619419.jpeg?auto=compress&cs=tinysrgb&w=1600"))
productList.push(new Product("R2D2", 40,"https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1600"))
productList.push(new Product("Uhle duckling", 15,"https://images.pexels.com/photos/106144/rubber-duck-bath-duck-toys-costume-106144.jpeg?auto=compress&cs=tinysrgb&w=1600"))
productList.push(new Product("T-Rex", 30,"https://images.pexels.com/photos/3671194/pexels-photo-3671194.jpeg?auto=compress&cs=tinysrgb&w=1600"))
productList.push(new Product("Mario Bros", 50,"https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1600"))
productList.push(new Product("Teddy Bear", 30,"https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=1600"))


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