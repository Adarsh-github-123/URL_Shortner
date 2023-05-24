const express = require(express);
const router = express.Router();
const createDB = require('../config/db');
const Url = require('../models/urlModel');

const baseUrl = "http://127.0.0.1:5500/public/urlapi";

//connecting database
createDB.sync.then( () => {
    console.log("Database created");
})

router.post('/', async(req, res) => {
    try{
        const {longUrl} = req.body;
        
        const shortId = Math.random();

        const shortUrl = await Url.create({
            longUrl,
            shortUrl: shortId
        });

        return res.status(200).json({
            status: "ok",
            shortUrl: `${baseUrl}/${shortId}`
        })
    } catch(e){
        console.error(e);
        return res.status(500).send(e);
    }
});