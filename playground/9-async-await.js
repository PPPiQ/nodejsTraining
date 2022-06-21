

const doWorkPromise = (a,b) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (a < 0 || b < 0){
            return reject('Number mus tbe non-negative')
        }
        resolve(a + b)
    }, 2000)
    })
}


const doWork = async () => { 
   const sum = await doWorkPromise(1, 99);
   const sum2 = await doWorkPromise(sum, -50)
   return sum2
}

doWork().then((value)=> {
    console.log("value is : ", value);
}).catch((e) => {
    console.log('Error: ', e);
})