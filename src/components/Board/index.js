import React, { useState, useEffect } from 'react'

import { Timer } from './Timer'
import { Cards } from './Cards'

import api from 'api'

export const Board = () => {

  const [cards, setCards] = useState([])
  const [matchedCard, setMacthedCard] = useState([])

  //Async cards fetch
  useEffect(() => {
    (async () => {
      const { cards } = await api.index(4)
      //Assign each one a unique id, by using code and current index
      const cardsWithDups = JSON.parse(JSON.stringify(cards.concat(Array.from(cards)))).map((card, i) => {
        card.id = `${card.code}-${i}`
        return card
      })
      setCards(cardsWithDups)
    })()
  }, [])

  return (
    <main>
      <Cards cards={cards} />
      <Timer />
    </main>
  )
}
