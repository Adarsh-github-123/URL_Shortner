const express = require(express);
const router = express.Router();

router.post('/', async(req, res) => {
    try{
        const {longUrl} = req.body;
    } catch(e){
        console.error(e);
    }
});