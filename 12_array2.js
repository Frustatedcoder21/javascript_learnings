
const marvel_heros=["ironman","captain america ","spiderman"]
const dc_hero=["batman","superman"]
const hero=marvel_heros.concat(dc_hero)  // joining array using concat operator
console.log(hero)
const all_heros=[...marvel_heros,...dc_hero] // joining array using spread operator
console.log(all_heros)

console.log(Array.from("Hitesh"))// coverts each letter into array items
