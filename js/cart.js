const handleAddProducts=()=>{
    const productEl=document.getElementById('product')
    const quantityEl=document.getElementById('quantity')
    const products=productEl.value
    const quantity=quantityEl.value
    console.log('product Name',",", products,"Quantity :", quantity);
    productEl.value=""
    quantityEl.value=""
}