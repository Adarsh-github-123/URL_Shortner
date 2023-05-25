const express = require('express');
const router = express.Router();
const createDB = require('../config/db');
const Url = require('../models/urlModel');

const baseUrl = "http://localhost:5500/urlapi";

//connecting database
createDB.sync().then( () => {
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
            shortUrl: `${baseUrl}/${shortId}`,
        })
    } catch(e){
        console.error(e);
        return res.status(500).send(e);
    }
});

router.get('/:short', async (req, res) => {
    let shortId = req.params.short;
    try{
        //find long url from database
        let url = await Url.findOne({
            where: {
                shortUrl : shortId
            }  
        });
        if(!url){
            return res.status(404).send("Invalid short Url");
        }
        return res.redirect(url.longUrl);
    } catch(e){
        return res.status(500).send(e);
    }
})


module.exports = router; 