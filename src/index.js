import { app } from "./app.js";
import { connectDB } from "./db/index.js"

connectDB().then(()=>{
    app.listen(8000,()=>{
        console.log('app listing on the port 8000');
    })
}).catch((err)=>{
    console.log(err);  
})


