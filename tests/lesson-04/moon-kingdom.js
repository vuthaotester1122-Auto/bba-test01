const createCharacters = [
    {name : 'thao', level : 2, health : 60 },
    {name : 'trang', level : 3, health : 700 }]
const charactersPowerUp = createCharacters.map(char => {
  return {
    name: char.name.toUpperCase(),   // name in UPPERCASE
    level: char.level * 2,           // level x2
    health: char.health * 3          // health x3
  }
})
console.log(charactersPowerUp);

const possibleWinners = charactersPowerUp.filter(char => char.health > 1000);

console.log(possibleWinners);