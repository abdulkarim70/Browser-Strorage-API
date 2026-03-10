const addNumberToLs=()=>{
    const number=Math.ceil(Math.random()*100)
    console.log(number);
    localStorage.setItem('number', number)//set to local storage
}

const objectToLs=()=>{
    const customer= {Name:'Rahim',products:3, price: 75}
   const customerJson=JSON.stringify(customer)

    localStorage.setItem('customer', customerJson)
   
    
}

const readObjectFromLs=()=>{
    const customerJson=localStorage.getItem('customer')
    const customer=JSON.parse(customerJson)
    console.log(customer.Name);
}




const getNumberFromLs=()=>{
    const number=localStorage.getItem('number')
    console.log('form saved local storage',number);
}