import express from 'express'
const Router = express.Router()

Router.get('/chatroom', (req, res, next) => {
  res.json({
    example: 'example'
  })
})

export default Router