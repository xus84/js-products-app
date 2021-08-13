const {products} = require('../../../db.json')
const { json } = require('express');
const express = require('express');
const app = express();


app.set('port' , process.env.PORT || 3000)
app.listen(app.get('port'))

app.get('/', (req, res) => {
    res.json(products)
})

console.log(`server on port  `, app.get('port') )