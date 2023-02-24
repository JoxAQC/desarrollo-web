const navEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burguerMenu = document.querySelector(".menu")
const mobilMenu = document.querySelector(".mobile-menu")
const cartIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCart = document.querySelector("#shoppingCartContainer")
const productDetail = document.querySelector("#productDetail")
const cardsContainer = document.querySelector('.cards-container');
const closeDetail = document.querySelector('.product-detail-close');

navEmail.addEventListener("click", toggleDesktopMenu)
burguerMenu.addEventListener("click", toggleMobileMenu)
cartIcon.addEventListener("click", toggleShoppingCart)
closeDetail.addEventListener("click", closeProductDetail)

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
    let productDetailImage = document.querySelector("#productDetailImage")
    let productDetailPrice = document.querySelector("#productDetailPrice")
    let productDetailName = document.querySelector("#productDetailName")
    console.log(name)
    console.log(price)
    console.log(source)
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