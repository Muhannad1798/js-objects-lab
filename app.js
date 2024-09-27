const pokemon = require('./data.js')

const game = {
  party: [],
  gyms: [
    { location: 'Pewter City', completed: false, difficulty: 1 },
    { location: 'Cerulean City', completed: false, difficulty: 2 },
    { location: 'Vermilion City', completed: false, difficulty: 3 },
    { location: 'Celadon City', completed: false, difficulty: 4 },
    { location: 'Fuchsia City', completed: false, difficulty: 5 },
    { location: 'Saffron City', completed: false, difficulty: 6 },
    { location: 'Cinnabar Island', completed: false, difficulty: 7 },
    { location: 'Viridian City', completed: false, difficulty: 8 }
  ],
  items: [
    { name: 'potion', quantity: 4 },
    { name: 'pokeball', quantity: 8 },
    { name: 'rare candy', quantity: 99 }
  ],
  difficulty: 'easy'
}

//console.dir(pokemon, { maxArrayLength: null })

//console.log(game)

pokemon.forEach((x) => {
  if (x.starter && x.name === 'Pikachu') {
    game.party.push(x.name)
    console.log(x.name)
  }
  //console.log(x)
})

//console.log(game)

let b = []
pokemon.forEach((x) => {
  if (b.length === 3) {
    b.forEach((n) => {
      if (x.hp > n.hp && x.name != n.name) {
      }
    })
  } else if (b.length < 3) {
    b.push(x)
  }
})

b.forEach((c) => {
  game.party.push(c.name)
})

//console.log(game.party)

//console.log(game)

game.gyms.forEach((x) => {
  if (x.difficulty <= 3) {
    x.completed = true
  }
})

//console.log(game.gyms)

game.party.splice(0, 1, pokemon[25].name)
console.log(game.party)

pokemon.forEach((y) => {
  if (y.starter) [console.log(y.name)]
})

/*const catchPokemon = (pokemonObj) => {
  game.party.push(pokemon[pokemonObj].name)
}

catchPokemon(17)
console.log(game.party)*/

const catchPokemon = (pokemonObj) => {
  game.party.push(pokemon[pokemonObj].name)
  game.items[1].quantity = game.items[1].quantity - 1
}

catchPokemon(17)
console.log(game.party)
console.log(game.items[1].quantity)

game.gyms.forEach((x) => {
  if (x.difficulty <= 6) {
    x.completed = true
  }
})

console.log(game.gyms)

const gymStatus = () => {
  let completed = 0
  let incomplete = 0
  game.gyms.forEach((x) => {
    if (x.completed) completed++
    else incomplete++
  })

  console.log(
    `Number of the completed items is ${completed} and the number of the incompleted is ${incomplete}`
  )
}

gymStatus()

const partyCount = () => {
  let sum = game.party.length
  console.log(sum)
}

partyCount()

game.gyms.forEach((x) => {
  if (x.difficulty <= 8) {
    x.completed = true
  }
})
