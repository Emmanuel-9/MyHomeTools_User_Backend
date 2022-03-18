require ( 'dotenv' ).config();
const express = require('express');
require ('./config/db').connect();

//call express app
const app = express();
app.use(express.json())

app.use("/product", require('./routes/products'))
app.use("/cart", require ('./routes/cartRoute'))


app.use("/orders", require('./routes/orders'))

//specify the port
const port = process.env.PORT

app.listen (port, () => {
    console.log ('server listening on port ' + port)
})
      
//       app.use("/product", require('./routes/products'))
//       app.use("/cart", require ('./routes/cartRoute'))
      
      
//       app.use("/orders", require('./routes/orders'))
      
//       //specify the port
//       const port = process.env.PORT
      
//       //Listen for connection
//       app.listen (port, () => {
//           console.log ('server listening on port ' + port)
//       })
module.exports = app