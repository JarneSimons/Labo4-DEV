const express = require('express')
const app = express()
const port = 3000


// enable cors express middleware
const cors = require('cors')
app.use(cors());

app.get("/api/v1/messages", (req, res) => {
  res.json({
    "status": "success",
    "message": "GET messages",
    "data": [{
      "message": "GETTING messages"
    }]  
  })
})


//messages 
const messages = [
  {
    "user": "Jarne",
    "message": "Hello World!"
  },
  {
    "user": "Jeff",
    "message": "Hey!"  
  },
  {
    "user": "Jarne",
    "message": "How are you?"
  }
]



app.get("/api/v1/messages/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    "status": "success",
    "message": `GET message with id ${id}`,
    "data": {
      "message": messages[id].message
    },
  })
})












app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})