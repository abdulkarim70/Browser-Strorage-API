const handleAddProducts=()=>{
    const productEl=document.getElementById('product')
    const quantityEl=document.getElementById('quantity')
    const products=productEl.value
    const quantity=quantityEl.value
    // console.log('Product Name:',"",products,",", "Quantity:", quantity);
    productEl.value=""
    quantityEl.value=""
displayProducts(products, quantity)
addProductsToCart(products,quantity)
}
const getCart=()=>{
const cart={}
return cart
}
const addProductsToCart=(products, quantity)=>{
    const cart=getCart()
    cart[products]=quantity
    console.log('cart',cart)
}

const displayProducts=(products, quantity)=>{
const li=document.createElement('li')
li.innerText=`${products} ${quantity}`
const productsContainer=document.getElementById('products-container')
productsContainer.append(li)
}
