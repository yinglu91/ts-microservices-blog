import express from 'express'
import { json } from 'body-parser'

const app = express()
app.use(json())

const posts = {name: 'ying lu'};

// https://ts-posts.dev/posts
app.get('/posts', (req, res) => {
  res.send(posts);
});

const PORT = 4000
app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT} !!`)
})