const authService = require('./auth.service.js')
//q2
 async function addAuthor(req,res,next) {
    try{
        const data = await authService.createAuthors(req.body)
        res.json(data)
    }catch(error){
        console.log(error);
        next(error)
    }
    
}



module.exports ={addAuthor}