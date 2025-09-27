// //Bài 1
// const createCharacters = [
//     {name : 'thao', level : 2, health : 60 },
//     {name : 'trang', level : 3, health : 700 }]
// const charactersPowerUp = createCharacters.map(char => {
//   return {
//     name: char.name.toUpperCase(),   // name in UPPERCASE
//     level: char.level * 2,           // level x2
//     health: char.health * 3          // health x3
//   }
// })
// console.log(charactersPowerUp);

// const possibleWinners = charactersPowerUp.filter(char => char.health > 1000);

// console.log(possibleWinners);

// //Bài 2 
// const players = [{name: "Mario", score:1000},
// {name: "Thao", score:700},
// {name: "Trang", score:850},
// {name: "Lan", score:300},
// ];
// players.sort((a, b) => b.score - a.score);
// const medals =["🥇","🥈","🥉"]
// for (let i = 0; i < 3; i++) {
//   players[i].medal = medals[i];
// }
// console.log(players);