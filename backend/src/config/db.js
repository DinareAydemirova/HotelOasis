const mongoose = require("mongoose") 
mongoose
	.connect("mongodb+srv://dinaraaydamirova:dinara12345@cluster1.o6ywqda.mongodb.net/kinsley?retryWrites=true&w=majority&appName=Cluster1")
	.then(() => {
		console.log("db connect");
	}).catch((error)=>console.log(error))