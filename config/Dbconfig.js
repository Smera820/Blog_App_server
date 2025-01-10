const mongoose = require('mongoose')
function mongooseconn() {
    mongoose.connect("mongodb://127.0.0.1:27017/blogproject", {

    })
        .then(() => console.log("db connected")
        )
        .catch((err) => {
            console.log(err);

        })
}
module.exports = mongooseconn