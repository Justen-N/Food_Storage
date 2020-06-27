require("dotenv").config();
const path = require("path");
const PORT = process.env.PORT || 3000;
const express = require("express");

const app = express();

app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin')

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);

app.listen(PORT);