const name = 'Andrew'
const userAge = 27

const user = {
    name, 
    age: userAge, 
    location: 'Philadelphia'
}

console.log(user);



//Object desctructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// // const label = product.label
// // const stock = product.stock

// const {label: productLabel, abel, stock} = product

// console.log(stock);
// console.log(productLabel);

const transaction = (type, {label, stock}) => {
console.log(label, stock);
}

transaction('order', product)