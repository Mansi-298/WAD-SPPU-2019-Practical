const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors =  require('cors');
const contactRoutes = require('./routes/contactRoute');

const app = express();
const port = 5000;

mongoose.connect('mongodb+srv://mansiwagh892:AuwexzIBAKDrwMD6@cluster0.p8m2ycu.mongodb.net/test')
.then(console.log("mongodb connected"))
.catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(contactRoutes);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})