require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
  res.send('Hello Pawan!')
})

app.get('/journey',(req,res)=>{
      res.send("BECOMING STRONGER DAY BY DAY")
})

app.get('/promise',(req,res)=>{
    res.send("ENCODED")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
