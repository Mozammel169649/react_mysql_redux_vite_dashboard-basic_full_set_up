const experss = require("express");
const allRoutes = require("./routes/all.routes");
const app = experss();
const port = 50009;

app.set('view engine', 'ejs');
app.set('views', './views')
app.use(experss.static("public"))

app.use(allRoutes());

app.listen(port,()=>{
    console.log(`app is listening on http://127.0.0.1:${port}`); 
})
