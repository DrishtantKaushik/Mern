const mongoose = require('mongoose');

const url = "mongodb+srv://drishtantkaushik2_db_user:Kaushik123@cluster0.ieimopm.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0poi ";

// asynchronous function - returns promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
    
})
.catch((err) => {
    console.log(err);
    
    
});



module.exports = mongoose
