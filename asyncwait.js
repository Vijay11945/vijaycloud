console.log("Person 1: Shows ticket")
console.log("Person 2: Shows ticket")
const preMov = async(()=> {
    const promiseWifeBringTricks = new Promise ( (resolve,reject) => {
      setTimeout(c1 => resolve('ticket'),3000);
    });
});
const getPopCorn = new Promise((resolve,reject)=>resolve('popcorn'));
const addButter = new Promise((resolve,reject)=>resolve('butter'));
const getColdDrinks = new Promise((resolve,reject)=>resolve('coldDrinks'));

let ticket = await promiseWifeBringTricks;
console.log("wife: i have the ${ticket}");
console.log("husband: weshould go in");
console.log("wife : No i am Hungry");

let popcorn = await getPopCorn;
console.log("husband: I got Some ${popcorn}");
console.log("husband: we should go in");
console.log("wife : i need butter on my pop corn");

let butter = await addButter;
console.log("husband: I got Some ${butter} on popcorn");
console.log("husband: anything else darling");
console.log("wife : i need cold Drinks");

let coldDrinks = await getColdDrinks;
console.log("husband: I got  ${coldDrinks} sprite and thumsup ");
console.log("husband: anything else darling");
console.log("wife :lets go we are getting late");
console.log("husband: thanks for reminding darling");
return ticket;

preMov().then((m) => console.log('Person 3 : shows ${m}'))

console.log("Person 4: Shows ticket")
console.log("Person 5: Shows ticket")