require('dotenv').config()
const {PORT, app} = require('./src/api/index')
require('./src/utils/mongoClient.js')


app.listen(PORT, () =>{console.log('connected in ', PORT)})