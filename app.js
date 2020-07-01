require("dotenv").config();
const path = require("path");
const PORT = process.env.PORT;

const express = require("express");
const app = express();


app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin')
const inventoryRoutes = require('./routes/storage')
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use('/inventory', inventoryRoutes);
console.log(PORT);
app.listen(PORT);