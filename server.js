const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 1000;


app.use(express.json());

// Routes
const adminRoutes = require('./routers/adminRoute');
const krFormRoutes = require("./routers/krFormRoute");


app.use(adminRoutes);
app.use(krFormRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://ajayamunik:Nfed6RWJWGDd2fMN@cluster0.51duirc.mongodb.net/KRLogistics',{}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});


