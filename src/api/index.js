const express = require('express');
const router = require('../routers/index');
const cors = require('cors')
const morgan = require('morgan');
const celebrate = require('celebrate')

const app = express();
app.use(express.json({extended:true}))
app.use(cors())
app.use(morgan('dev'))

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('CloneDunk API V1');
});

app.use('/api/v1', router)

app.use(celebrate.errors())

module.exports = {
    app,
    PORT
}