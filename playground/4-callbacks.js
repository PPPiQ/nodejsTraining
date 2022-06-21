
    add ( 1, 4, (sum) => {
        console.log(sum);
    })
    

function add(number1, number2, callback) {

    setTimeout(() => {
        callback(number1 + number2);
    }, 2000);

}

