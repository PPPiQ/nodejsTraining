

const greeter  = (name = 'user', age) => {
    console.log('Hello ' + name);
}
console.log(process.argv[2]);
greeter(process.argv[2])