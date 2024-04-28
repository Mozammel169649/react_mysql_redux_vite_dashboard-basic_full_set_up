const experss = require("express");
const allRoutes = require("./routes/all.routes");
const app = experss();
const port = 50009;
const formData = require('express-form-data');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views')
app.use(experss.static("public"))
app.use(formData.parse());
app.set('json spaces', 4);

app.use(allRoutes());

app.listen(port,()=>{
    console.log(`app is listening on http://127.0.0.1:${port}`); 
})
