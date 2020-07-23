require("dotenv").config();
var nunjucks = require('nunjucks')
var Sequelize = require('sequelize')
const path = require("path");
const PORT = process.env.PORT;
const bodyParser = require('body-parser')
var sequelize = new Sequelize(process.env.PGDATABASE,process.env.PGUSER, process.env.PGPASSWORD,{host:process.env.PGHOST, port:process.env.PGPORT,dialect:'postgres'})
require('./models/index.js').init(sequelize);

const express = require("express");
const app = express();
nunjucks.configure(['./views','./sequelize-template'],{autoescape:true, express:app});
app.set('view engine', 'njk')
const adminRoutes = require('./routes/admin')
const inventoryRoutes = require('./routes/storage');
const { body } = require("express-validator");
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded())
app.use('/',adminRoutes);
app.use('/inventory', inventoryRoutes);
app.listen(PORT);