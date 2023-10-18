const express = require('express')
const app = express()
const port = 3000


// enable cors express middleware
const cors = require('cors')
app.use(cors());

app.get("/api/v1/messages/", (req, res) => {
  res.json({
    "status": "success",
    "message": "GET messages",
    "data": []
  
  })
})


app.get("/api/v1/messages/:id", (req, res) => {
  res.json({
    "status": "success",
    "message": "GET messages 1",
    "data": {
      "messages" : [
        {
          "user": "Jarne",
          "message": "Hello World!"
        },
        {
        "user": "Jeff",
        "message": "Hey!"  
        }
      ]
    },
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})