/// <reference path="./typings/express-sse.d.ts" />

import byId from './reducers/byId'
import audio from './middlewares/audio'
import player from './middlewares/player'
import express from 'express'
import SSE from 'express-sse'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import config from '../config.js'

const app = express()
const cors = require('cors')
app.use(cors())

const toList = (byId: object) =>
  Object.keys(byId).map(key => {
    const tile = byId[key]
    return {
      id: key,
      name: tile.name,
      style: tile.style || {},
      state: tile.state || {}
    }
  })

const reducer = combineReducers({ byId: byId(config.tiles) })
const middlewares = [player, audio].map(({ name, register }) => register(config.plugins[name]))
const store = createStore(reducer, applyMiddleware(...middlewares))
const sse = new SSE(toList(store.getState().byId), { isSerialized: false })

app.post('/action/:id', (req: express.Request, res: express.Response) => {
  const tiles = store.getState().byId
  const id: keyof typeof tiles = req.params.id
  const tile = tiles[id]

  for (const action of tile.actions) {
    store.dispatch({ ...action, from: id })
  }

  res.sendStatus(200)
})

store.subscribe(() => {
  const tiles = toList(store.getState().byId)
  // console.log({ tiles })
  sse.send(tiles)
})

const port = process.env.PORT || 3001
app.get('/stream', sse.init)
app.listen(port, () => console.log(`OpenStreamDeck app listening on port ${port}!`))
