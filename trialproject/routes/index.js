var express = require('express');
var router = express.Router();

// /* GET home page. */

router.get("/",(req,res)=>{
    res.send("Iam on the homepage.")
    res.end();
})

router.get("/gallery",(req,res)=>{
    res.send("Iam in gallery.")
    res.end();
})

router.post("/submit",(req,res)=>{
 const content ="hello";
 fs.appendFile(path.join(__dirname,"/message.txt"),content,function(err){
    if(err){
        console.log(err);
        return;
    }
 res.send("Data submitted.");
 });
})   

router.get("/submit",(req,res)=>{
    res.send("Get of submit in browser.")

});
// router.listen(8000,()=>{
//     console.log("Application is running")
// })

module.exports = router;
