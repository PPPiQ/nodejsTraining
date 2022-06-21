require("../src/db/mongoose");
const Task = require('../src/models/task');

// Task.findByIdAndDelete('62ab2c1987b954214ce787b8')
// .then((task) => {
//     console.log(task);
//     return Task.countDocuments({  })
// }).then(result => {
//     console.log(result);
// }
// ).catch((e) => {
//     console.log(e);
// })

const updateAgeAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({});

    return count
}


updateAgeAndCount('62abd8c9db61d0fd18d5d4b3').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})