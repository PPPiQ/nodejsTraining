require("../src/db/mongoose");
const User = require('../src/models/user');

// User.findByIdAndUpdate('62abd90db67e8cf261c28add', { age: 1 })
// .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1})
// }).then(result => {
//     console.log(result);
// }
// ).catch((e) => {
//     console.log(e);
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age});
    const count = await User.countDocuments({age});

    return count
}

updateAgeAndCount('62ac2b67fdc5f6b0240e140d', 2).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})


