const express = require('express');
const app = express();
const homeRoutes = require("./routes/home");
const shortUrl = require("./routes/url");

const PORT = 1337;

//middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.use('/urlapi',shortUrl);
app.use('/',homeRoutes);

app.listen(PORT, () => {
    console.log("The app is running at PORT = ",PORT);
})