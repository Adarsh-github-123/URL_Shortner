const express = require(express);
const router = express.Router();


router.post('/', async(req, res) => {
    try{
        const {longUrl} = req.body;
        
        const shortId = nanoid(4);
    } catch(e){
        console.error(e);
        return res.status(500).send(e);
    }
});