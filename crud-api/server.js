const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const port = 5000;

mongoose.connect("mongodb+srv://mansiwagh892:VeRdcFqmstpCuASO@cluster0.npevxei.mongodb.net/crudDB")
.then(() => console.log("mongodb connected"))
.catch(err => console.log(err));

app.use(bodyParser.json());
app.use(cors());
app.use('/api/items', itemRoutes);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
